<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div class="grid-item-stocks-bar grid-item">
        <div class="hwrap">
          <div class="hmove">
            <div class="hitem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div class="hitem">Aliquam consequat varius consequat.</div>
            <div class="hitem">
              Fusce dapibus turpis vel nisi malesuada sollicitudin.
            </div>
            <div class="hitem">
              Pellentesque auctor molestie orci ut blandit.
            </div>
          </div>
        </div>
      </div>
      <div class="grid-item-graph grid-item">Gráfico</div>
      <div class="grid-item-search grid-item">Procura de Ações</div>
      <div class="grid-item-list grid-item">
        <table id="secondTable">
          <thead>
            <tr>
              <th v-for="col in columns" :key="col" @click="sortTable(col)">{{ col }}
                <div class="arrow" v-if="col == sortColumn" v-bind:class="ascending ? 'arrow_up' : 'arrow_down'"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row">
              <td v-for="col in columns" :key="col">{{ row[col] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- <button
      @click="
        subscribe({
          event: 'subscribe',
          stocks: ['V'],
        })
      "
    >
      Inscrever
    </button>
    <button
      @click="
        unsubscribe({
          event: 'unsubscribe',
          stocks: ['V'],
        })
      "
    >
      desinscrever
    </button> -->
    <footer class="footerApp">
      Contato
      <address>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </address>
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      connection: null,
      acao: {},
      rows: [
        {
          stock: "JS5",
          price: 125,
          change: `${0.2}%`,
        },
        {
          stock: "RTV",
          price: 200,
          change: `${5}%`,
        },
        {
          stock: "V",
          price: 90,
          change: `${1.2}%`,
        },
      ],
    };
  },
  methods: {
      sortTable(col) {
      if (this.sortColumn === col) {
        this.ascending = !this.ascending;
      } else {
        this.ascending = true;
        this.sortColumn = col;
      }

      var ascending = this.ascending;

      this.rows.sort(function(a, b) {
        if (a[col] > b[col]) {
          return ascending ? 1 : -1
        } else if (a[col] < b[col]) {
          return ascending ? -1 : 1
        }
        return 0;
      })
    }
  },
  computed:{
      columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0])
    }
  }
  // Teste pegando ações
  // methods: {
  //   subscribe: function (message) {
  //     console.log(this.connection);
  //     message = message = JSON.stringify(message);
  //     console.log(message);
  //     this.connection.send(message);
  //   },
  //   unsubscribe: function (message) {
  //     console.log(this.connection);
  //     message = message = JSON.stringify(message);
  //     console.log(message);
  //     this.connection.send(message);
  //   },
  // },
  // created() {
  //   console.log("Começando conexão com servidor...");
  //   this.connection = new WebSocket("ws://localhost:8080");

  //   this.connection.onopen = function (event) {
  //     console.log(event);
  //     console.log("Conectador ao servidor com sucesso!");
  //   };

  //   this.connection.onmessage = function (event) {
  //     console.log(event);
  //     this.acao = JSON.parse(event.data);
  //     console.log(this.acao.stocks.V);
  //   };
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
  background: #6d6d6d;
  height: auto;
  width: auto;
  margin: 0;
}
body,
div {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
div.container {
  padding: 50px;
  display: grid;
  grid-template: repeat(4, 100px) / repeat(3, 350px);
  justify-content: space-evenly;
  grid-auto-flow: column;
}
.grid-item {
  color: white;
  font-size: 1rem;
  padding: 1rem;
  text-align: center;
  border: 2px solid black;
}
.grid-item-stocks-bar {
  grid-column: 1 / span 3;
  margin-bottom: 40px;
}
.grid-item-graph {
  background-color: #eee;
  color: black;
  grid-row: 2 / span 3;
  grid-column: 1 / span 2;
}
.grid-item-list {
  grid-row: 3 / span 2;
  padding:0
}
footer.footerApp {
  padding: 10px;
  background: #1c1c1c;
  text-align: left;
}
/* (A) FIXED WRAPPER */
.hwrap {
  overflow: hidden; /* HIDE SCROLL BAR */
  background: #eee;
  color: #1c1c1c;
}

/* (B) MOVING TICKER WRAPPER */
.hmove {
  display: flex;
}

/* (C) ITEMS - INTO A LONG HORIZONTAL ROW */
.hitem {
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

/* (D) ANIMATION - MOVE ITEMS FROM RIGHT TO LEFT */
/* 4 ITEMS -400%, CHANGE THIS IF YOU ADD/REMOVE ITEMS */
@keyframes tickerh {
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(-400%, 0, 0);
  }
}
.hmove {
  animation: tickerh linear 15s infinite;
}
.hmove:hover {
  animation-play-state: paused;
}

/* Tabela de ações */
table {
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  border-collapse: collapse;
  color:#1c1c1c
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #797979;
  border: 1px solid #6d6d6d;
  cursor: pointer;
  color: #eee;
  padding: 8px;
  min-width: 30px;
}
table th:hover {
  background: #a5a5a5;
}
table td {
  text-align: left;
  padding: 8px;
  border-right: 1px solid #6d6d6d;
}
table td:last-child {
  border-right: none;
}
table tbody tr td {
  background: #eee;
}
table tbody tr:nth-child(2n) td {
  background: #dbdbdb;
}


.arrow_down {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAaCAYAAABPY4eKAAAAAXNSR0IArs4c6QAAAvlJREFUSA29Vk1PGlEUHQaiiewslpUJiyYs2yb9AyRuJGm7c0VJoFXSX9A0sSZN04ULF12YEBQDhMCuSZOm1FhTiLY2Rky0QPlQBLRUsICoIN/0PCsGyox26NC3eTNn3r3n3TvnvvsE1PkwGo3yUqkkEQqFgw2Mz7lWqwng7ztN06mxsTEv8U0Aam5u7r5EInkplUol/f391wAJCc7nEAgE9Uwmkzo4OPiJMa1Wq6cFs7Ozt0H6RqlUDmJXfPIx+qrX69Ti4mIyHA5r6Wq1egND+j+IyW6QAUoul18XiUTDNHaSyGazKcZtdgk8wqhUKh9o/OMvsVgsfHJy0iWqVrcQNRUMBnd6enqc9MjISAmRP3e73T9al3XnbWNjIw2+KY1Gc3imsNHR0YV4PP5+d3e32h3K316TySQFoX2WyWR2glzIO5fLTSD6IElLNwbqnFpbWyO/96lCoai0cZjN5kfYQAYi5H34fL6cxWIZbya9iJyAhULBHAqFVlMpfsV/fHxMeb3er+Vy+VUzeduzwWC45XA4dlD/vEXvdDrj8DvURsYEWK3WF4FA4JQP9mg0WrHZbEYmnpa0NxYgPVObm5teiLABdTQT8a6vrwdRWhOcHMzMzCiXlpb2/yV6qDttMpkeshEzRk4Wo/bfoe4X9vb2amzGl+HoXNT29vZqsVi0sK1jJScG+Xx+HGkL4Tew2TPi5zUdQQt9otPpuBk3e0TaHmMDh1zS7/f780S0zX6Yni+NnBj09fUZUfvudDrNZN+GkQbl8Xi8RLRtHzsB9Hr9nfn5+SjSeWUCXC7XPq5kw53wsNogjZNohYXL2EljstvtrAL70/mVaW8Y4OidRO1/gwgbUMvcqGmcDc9aPvD1gnTeQ+0nmaInokRj0nHh+uvIiVOtVvt2a2vLv7Ky0tL3cRTXIcpPAwMDpq6R4/JXE4vFQ5FI5CN+QTaRSFCYc8vLy1l0rge4ARe5kJ/d27kYkLXoy2Jo4C7K8CZOsEBvb+9rlUp1xNXPL7v3IDwxvPD6AAAAAElFTkSuQmCC')
}
.arrow_up {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAAAXNSR0IArs4c6QAAAwpJREFUSA21Vt1PUmEYP4dvkQ8JFMwtBRocWAkDbiqXrUWXzU1rrTt0bdVqXbb1tbW16C9IBUSmm27cODdneoXjputa6069qwuW6IIBIdLvdaF4OAcOiGeDc87zPs/vd57P96WpFq7p6enbGo1mjKZpeTabjU1MTCRagGnOZHFxcXxtbe1XKpUq7+zslJeXl//Mz8+Hy+Uy3RxSE9qTk5M3otFooVQqgef4Wl9f343FYoEmoISrxuNxFX5f9vb2jhn/PxUKhfLS0tIPfFifUESRUMV8Pv/M6XReRm5rTGQyGeXxeGxYe1ezeBpBOBx2rKysbO7v79d4Wy3Y2Nj4GQqFbgnhaugxwiuGJx99Pp9FLBbXxYTXvTqd7v3MzIy6riIWGxJnMpl7AwMD14xGYyMsSq1WUyQdUqn0eSPlusQIsbGrq+vl4OCgvhFQZd1utyv1en0gEolcqsi47nWJlUrlG5fLZVcoFFy2nDKSDpIWlUoVTCQSEk4lCHmJMZ2GTCbTiMVikfIZ88l7enoos9l8dXt7+z6fDicxSJUokqDX6xXcl2wCROoc0vQCWL3sNfLOSdzR0fHY4XC4tVotl40gmVwup9xuN4OQv+UyqCFGH9rg7SOGYVRcBs3IEG4J0nVnamrqOtvuBDGGgQg9+wHFcVEi4a0LNkbdd6TrPKo8ODc311mteIIYjT/a398/jK+s1jnVM0kXoufCFvq0GuiIGEVgQIhfoygM1QrteEa9dAL7ITiYCt4RMabOK5AyKKzKWtvupLcRciu8D5J0EuDDPyT/Snd39yh6VtY2NhYQSR9G79Ds7OxdskRjEyAufvb7/cPoO5Z6e1+xtVKrq6vfcFzyi/A3ZrPZ3GdNSlwgo5ekE4X2RIQGf2C1WlufFE0GBeGWYQ8YERWLxQtnUVB830MKLZfL9RHir8lkssCn2G751tZWEWe03zTKm15YWPiEiXXTYDB0Ig/t7yd8PRws4EicwWHxO4jHD8/C5HiTTqd1BwcHFozKU89origB+y/kmzgYpgOBQP4fGmUiZmJ+WNgAAAAASUVORK5CYII=')
}
.arrow {
  float: right;
  width: 12px;
  height: 15px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: bottom;
}
</style>
