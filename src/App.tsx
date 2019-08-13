import React from 'react';
import './App.css';
import {GetPost} from "./react-fetchers";
import {RestfulProvider} from 'restful-react';

const App = () => (
    <RestfulProvider base="http://localhost">

      <GetPost>
        { response => (
            response
                ? <div>
                  <h1>Posts</h1>
                  <ul>
                    {response.items.map(post => (
                        <li>
                          {post.title}
                        </li>
                    ))}
                  </ul>
                </div>
                : <div>ERROR</div>
        )}
      </GetPost>
    </RestfulProvider>
);

export default App;
