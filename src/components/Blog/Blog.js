import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>1.What is cors?</h1>
      <p>
        Ans: Cross-Origin Resource Sharing (CORS) is an HTTP-header based
        mechanism that allows a server to indicate any origins (domain, scheme,
        or port) other than its own from which a browser should permit loading
        resources.
      </p>
      <h1>2.1: Why are we using firebase? </h1>
      <p>
        ans: The Firebase Realtime Database lets you build rich, collaborative
        applications by allowing secure access to the database directly from
        client-side code. Data is persisted locally, and even while offline,
        realtime events continue to fire, giving the end user a responsive
        experience.
      </p>
      <h1>2.2: What other options do you have implement without firebase?</h1>
      <p>ans: Back4App,Backendless,kuzzle,pubnub,Heroku</p>
      <h1>how does the private route work</h1>
      <p>
        ans: The private route component is similar to the public route, the
        only change is that redirect URL and authenticate condition. If the user
        is not authenticated he will be redirected to the login page and the
        user can only access the authenticated routes If he is authenticated
        (Logged in)
      </p>
      <h1>4.1: what is node?</h1>
      <p>
        Ans:A node is a basic unit of a data structure, such as a linked list or
        tree data structure. Nodes contain data and also may link to other
        nodes. Links between nodes are often implemented by pointers.
      </p>
      <h1>4.2:How does node work?</h1>
      <p>
        ans:It is a used as backend service where javascript works on the
        server-side of the application. This way javascript is used on both
        frontend and backend. Node. js runs on chrome v8 engine which converts
        javascript code into machine code, it is highly scalable, lightweight,
        fast, and data-intensive.
      </p>
    </div>
  );
};

export default Blog;
