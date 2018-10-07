import { Component,Prop,State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
@Component({
    tag: 'my-detail',
    styleUrl: 'my-detail.css'
})

export class MyDetail {
    @Prop() match: MatchResults;
    @State() myData : any=[];

    load () {
    fetch(`https://polymer-101-workshop.cleverapps.io/api/blogpost/`+this.match.params.id)
    .then(res =>res.json())
    .then(posts => this.myData=posts)
    }

    componentWillLoad () {

        this.load();
    }

    render() {
        return (
            
            <div>
            <form>
            <fieldset>
            <legend>Article détail</legend>
            <h1>{this.myData.autor}</h1>
            <h1>{this.myData.title}</h1>
            <h1>{this.myData.article}</h1>
            <h1>{this.myData.creationDate}</h1>
            </fieldset></form>
            </div>

        );
    }
} 