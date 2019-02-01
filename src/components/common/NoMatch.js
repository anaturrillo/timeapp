import React from "react";

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No se encuentra la página <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default NoMatch;