import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
    tag: 'suprimer-fle',
    styleUrl: 'suprimer-fle.css'
})
export class suprimerfle {
    @Prop() match: MatchResults;
    
        deleteData() {
            fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost/"+this.match.params.id, {
                method: "DELETE",
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json"
                }
              })
        .then(response => response.json());
      }


    render() {
        return (
            <h1>l'article qui à l'id {this.match.params.id} est suprimer {this.deleteData()}</h1>
            
        );
    }
}