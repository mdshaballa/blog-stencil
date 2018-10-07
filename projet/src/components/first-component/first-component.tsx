import { Component, State } from '@stencil/core';
import { isNullOrUndefined } from 'util';


@Component({
    tag: 'first-component',
    styleUrl: 'first-component.css'
})
export class FirstComponent {
    
    @State() myData : any=[];
    load () {
    fetch(`https://polymer-101-workshop.cleverapps.io/api/blogpost/`)
    .then(res =>res.json())
    .then(posts => this.myData=posts)

}

componentWillLoad () {

    this.load();
}
    render() {
        return (
            <table class="table-style-three">
            <thead>
            <tr>
                <th>title</th>
                <th>Author</th>
                <th>article</th>
                <th>Création</th>
            </tr>
            </thead>
            {this.myData.map((item) => 
            <tr>
                <td>{item.title}</td>
                <td>{item.autor}</td>
                <td>{isNullOrUndefined(item.article) ? item.article : item.article.substring(1,100)}</td>
                <td>{item.creationDate}</td>
                <td>

                <stencil-route-link url={'/detail/'+item._id}>
                  <button >
                    détail  
                  </button>
                </stencil-route-link>
                </td>
                <td>
                <stencil-route-link url={'/editfle/'+item._id}>
                  <button>
                    édit
                  </button>
                </stencil-route-link>
                </td>
                <td>
                <stencil-route-link url={'/suprimerfle/'+item._id}>
                  <button>
                    suprimer
                  </button>
                </stencil-route-link>
                </td>
            </tr>)} 
         </table> 
                );
            }
        }