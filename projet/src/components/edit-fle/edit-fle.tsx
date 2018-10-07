import { Component,Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import {RouterHistory} from "@stencil/router";

@Component({
    tag: 'edit-fle',
    styleUrl: 'edit-fle.css'
})
export class editfle {
    @Prop() match: MatchResults;
    @State() myData : any=[];
    @State()  title: string;
    @State()  article: string;
    @State()  author: string;
    @Prop()   home : RouterHistory;

    load () {
        fetch(`https://polymer-101-workshop.cleverapps.io/api/blogpost/`+this.match.params.id)
        .then(res =>res.json())
        .then(posts => this.myData=posts)
        }
        componentWillLoad () {
            this.load();
        }
      reculer(){
        this.home.goBack();
      }
      postArticle(e) {
        e.preventDefault();
        console.log("!");
        const title = this.title;
        const article = this.article;
        const autor = this.author;
        const payload = {
          title,
          article,
          autor
        };
        fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost"+this.match.params.id, {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        })
          .then(function(res) { this.reculer();
            return res.json();
          })
          .then(function(data) {
            console.log(JSON.stringify(data));
          });
      }
    render() {
        return (
            <article><form>
            <br></br><br></br>
            <label >TITLE</label>
            <input type="text" onInput={(e: any) => (this.title = e.target.value)} value={this.myData.title}/>
            <br></br><br></br>
            <label >ARTICLE</label>
            <input type="textarea"
                    onInput={(e: any) => (this.article = e.target.value)}
                    value={this.myData.article}
                  />
            <br></br><br></br>
            <label >AUTHOR</label>
            <input type="text" onInput={(e: any) => (this.author = e.target.value)} value={this.myData.autor}/>
            <br></br><br></br>
            <button onClick={this.postArticle.bind(this)} >Enregistré</button>
            <stencil-route-link url={'/'}>
            <button>Cancel</button>
            </stencil-route-link>
            <input type="reset" value="Vider les champs" /></form>
        </article>
        );
    }
}