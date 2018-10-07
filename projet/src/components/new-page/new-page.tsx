import { Component, State, Prop } from '@stencil/core';
import {RouterHistory} from "@stencil/router";

@Component({
    tag: 'new-page',
    styleUrl: 'new-page.css'
})
export class NewPage {
    @State()  title: string;
    @State()  article: string;
    @State()  author: string;
    @Prop()   home : RouterHistory;
  

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

    fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
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
                <input type="text" placeholder="Title..." onInput={(e: any) => (this.title = e.target.value)}/>
                <br></br><br></br>
                <label >ARTICLE</label>
                <input type="textarea"
                        placeholder="Article..."
                        onInput={(e: any) => (this.article = e.target.value)}
                      />
                <br></br><br></br>
                <label >AUTHOR</label>
                <input type="text" placeholder="author..."  onInput={(e: any) => (this.author = e.target.value)}/>
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