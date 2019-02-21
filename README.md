## Getting started

**Clone the repo**

```sh
git clone https://github.com/chintyadewi/crud-express-mysql.git
```

**Jump to newly created folder**

```sh
cd crud-express-mysql
```

**Install all packages**

```sh
npm install
```

**Import dumped SQL database**

Import `crud-express.sql` file to your mysql host

**Setup database connection**

Go to `config/db.js` file and configure the connection:

```js
host:'',       // url host
user:'',       // mysql username
password:'',   // mysql password
database:''    // mysql name
```

**Start the server**
```sh
npm start
```