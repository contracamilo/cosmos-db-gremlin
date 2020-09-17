
# Run queries with your app

From the Command Shell, run the following command:

```Bash
node app.js
```

Your app should display a basic help message; for example:

```Bash
Please enter a Gremlin/Graph Query.
```

Your new Azure Cosmos DB account should not contain any data, but just to make sure, run the following command to remove all of the nodes:

```Bash
node app.js "g.V().drop()"
```

Your app should display a message indicating that no nodes were returned; for example:

```JSON
    {"Returned": "0"}
```

Now you'll add some product nodes to your database. To do so, run the following commands:

```Bash
    node app.js "g.addV('Product').property('id', 'p1').property('name', 'Phone Charger').property('price', 12.99)"
    node app.js "g.addV('Product').property('id', 'p2').property('name', 'USB C Cable Charger').property('price', 8.99)"
    node app.js "g.addV('Product').property('id', 'p3').property('name', 'Gardening Gloves').property('price', 2.99)"
```

Your app should display a message for each command indicating that 1 vertice/node was returned; for example:

```JSON
{"Returned": "1"}
```

Now add some category nodes to your database. To do so, run the following commands:

```Bash
    node app.js "g.addV('Category').property('id', 'c1').property('name', 'Mobile Phones')"
    node app.js "g.addV('Category').property('id', 'c2').property('name', 'Gardening')"
```

Your app should display a message for each command indicating that 1 vertice/node was returned:

```JSON
{"Returned": "1"}
```

Verify that all of your vertices/nodes have been added to your database. To do so, run the following command:

```Bash
    node app.js "g.V()"
```

Your app should display a message indicating that 5 vertices/nodes were returned; for example:

```JSON
{"Returned": "5"}
```

Now add some product to category relationships to your database. To do so, run the following commands:

```Bash
    node app.js "g.V('p1').addE('belongsto').to(g.V('c1'))"
    node app.js "g.V('p2').addE('belongsto').to(g.V('c1'))"
    node app.js "g.V('p3').addE('belongsto').to(g.V('c2'))"
```

Verify that all of your edges/relationships have been added to your database. To do so, run the following command:

```Bash
    node app.js "g.E()"
```

## Examine your data in the Azure

![Data Explorer](https://i.imgur.com/ewIJzAi.png)

You can now use the Data Explorer in the Azure portal to browse and query your new graph data.

* In Data Explorer, expand the database and container nodes, and then click Graph.

* Click the Execute Gremlin Query button to use the default query to view all the vertices in the graph.
  
The data you entered using your app is displayed in the Graph pane. You can zoom in and out of the graph, you can expand the graph display, add additional vertices, and move vertices on the display surface.

node app.js "g.V()" //Vertices - nodes
node app.js "g.E()" //Edges - relationships
node app.js "g.V().count()"  //Count the number of vertices/nodes or edges/relationships in the graph

### Applying filters to queries

```Bash
node app.js "g.V().hasLabel('Category')"
node app.js "g.V().hasLabel('Product').has('id','p1')"
```

### Projection from your query results

```Bash
node app.js "g.V().hasLabel('Category').values('name')"
```

```JSON
{"Returned": "2"}
"Mobile Phones"
"Gardening"
```

```Bash
node app.js "g.V().hasLabel('Product').values('name','price')"
```

```JSON
{"Returned": "6"}
"Phone Charger"
12.99
"USB C Cable Charger"
8.99
"Gardening Gloves"
2.99
```

### Sorting queries

```Bash
node app.js "g.V().hasLabel('Product').order().by('name', incr).values('name','price')"
```

```JSON
{"Returned": "6"}
"Gardening Gloves"
2.99
"Phone Charger"
12.99
"USB C Cable Charger"
8.99
```

```Bash
node app.js "g.V().hasLabel('Product').order().by('price', decr).values('name','price')"
```

```JSON
"Phone Charger"
12.99
"USB C Cable Charger"
8.99
"Gardening Gloves"
2.99
```

## Update properties of vertices

You can update the properties of a specific vertice/node by applying a filter and then assigning the property a new value; for example

```Bash
node app.js "g.V('p1').property('price', 15.99)"
```

Your app should display a list of results like the following example:

```JSON
{"Returned": "1"}
{"id":"p1","label":"Product","type":"vertex","properties":{"name":[{"id":"7f10b6bb-0a8a-4cf2-b2ac-8d8e4888c007","value":"Phone Charger"}],"price":[{"id":"05184a58-d0d9-4866-9539-511389ca355c","value":15.99}]}}
```

[Reference Doc]("https://docs.microsoft.com/en-us/learn/modules/store-access-data-cosmos-graph-api/6-exercise-query-graph-data-from-an-application-using-gremlin-api?pivots=javascript")
