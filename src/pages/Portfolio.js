import './Portfolio.css';

const Portfolio = (props) => {
    
    const portfolio_html = `
    <!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #f1f1f1;
  padding: 20px;
  font-family: Arial;
}

/* Center website */
.main {
  max-width: 1000px;
  margin: auto;
}

h1 {
  font-size: 50px;
  word-break: break-all;
}

.row {
  margin: 8px -16px;
}

/* Add padding BETWEEN each column */
.row,
.row > .column {
  padding: 8px;
}

/* Create four equal columns that floats next to each other */
.column {
  float: left;
  width: 25%;
}

/* Clear floats after rows */ 
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Content */
.content {
  background-color: white;
  padding: 10px;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 900px) {
  .column {
    width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
</head>
<body>

<!-- MAIN (Center website) -->
<div class="main">

<h1>My Proof Portolio</h1>
<hr>

<h2>PORTFOLIO</h2>
<p>My DAO work portfolio page showcasing Proof of Work NFTs received.</p>

<!-- Portfolio Gallery Grid -->
<div class="row">
  <div class="column">
    <div class="content">
      <img src="https://pbs.twimg.com/profile_images/1461700151383400450/3Kwlnvl__400x400.png" alt="Gitcoin" style="width:100%">
      <h3>Gitcoin Engineering Guild</h3>
      <p>Integrate Sobol with discord and notion for Gitcoin</p>
      <a href="https://gateway.pinata.cloud/ipfs/QmfQvb7QQG5DE6m8tFURE5Uuhu7dRU7TEaxRcSutmEPmQe">View Proof</a></p>
    </div>
  </div>
  <div class="column">
    <div class="content">
      <img src="https://gateway.pinata.cloud/ipfs/QmfQvb7QQG5DE6m8tFURE5Uuhu7dRU7TEaxRcSutmEPmQe" alt="Proof" style="width:100%">
      <h3>Buidl Proof MVP</h3>
      <p>Luanch Proof MVP with user edit and profile page</p>
      <a href="https://gateway.pinata.cloud/ipfs/QmfQvb7QQG5DE6m8tFURE5Uuhu7dRU7TEaxRcSutmEPmQe">View Proof</a></p>
    </div>
  </div>
  <div class="column">
    <div class="content">
      <img src="https://pbs.twimg.com/profile_images/1461700151383400450/3Kwlnvl__400x400.png" alt="Gitcoin" style="width:100%">
      <h3>Gitcoin Engineering Guild</h3>
      <p>Integrate Sobol with discord and notion for Gitcoin</p>
      <a href="https://gateway.pinata.cloud/ipfs/QmfQvb7QQG5DE6m8tFURE5Uuhu7dRU7TEaxRcSutmEPmQe">View Proof</a></p>
    </div>
  </div>
  <div class="column">
    <div class="content">
      <img src="https://gateway.pinata.cloud/ipfs/QmfQvb7QQG5DE6m8tFURE5Uuhu7dRU7TEaxRcSutmEPmQe" alt="Proof" style="width:100%">
      <h3>Buidl Proof MVP</h3>
      <p>Luanch Proof MVP with user edit and profile page</p>
      <a href="https://gateway.pinata.cloud/ipfs/QmfQvb7QQG5DE6m8tFURE5Uuhu7dRU7TEaxRcSutmEPmQe">View Proof</a></p>
    </div>
  </div>
<!-- END GRID -->
</div>

<!-- <div class="content">
  <img src="/w3images/p3.jpg" alt="Bear" style="width:100%">
  <h3>Some Other Work</h3>
  <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
  <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
</div> -->

<!-- END MAIN -->
</div>

</body>
</html>
        `;

    return (
    <div className="container" dangerouslySetInnerHTML={{__html: portfolio_html 
    }}></div>
    );
};

export default Portfolio;