      const log = console.log;

      /*
      /C = comprimento
      //1 = numero da toalha
      ///1 = ID
      */

      var felpa = [
        { art: 3, dim01: 77.5, dim02: 1.38 },
        { art: 9, dim01: 47, dim02: 0.68 },
        { art: 7, dim01: 80, dim02: 1.38 },
        { art: 25, dim01: 47, dim02: 0.68 },
        { art: 15, dim01: 80, dim02: 1.46 },
        { art: 23, dim01: 47, dim02: 0.68 },
        { art: 17, dim01: 72, dim02: 1.18 },
        { art: 19, dim01: 47, dim02: 0.63 },
        { art: 26, dim01: 77.5, dim02: 1.38 },
        { art: 29, dim01: 47, dim02: 0.78 },
        { art: 27, dim01: 77.5, dim02: 1.38 },
        { art: 30, dim01: 47, dim02: 0.78 },
        { art: 28, dim01: 77.5, dim02: 1.33 },
        { art: 31, dim01: 82, dim02: 1.68 },
        { art: 32, dim01: 47, dim02: 0.78 },
        { art: 33, dim01: 72, dim02: 1.18 },
        { art: 34, dim01: 47, dim02: 0.63 },
        { art: 35, dim01: 72, dim02: 1.18 },
        { art: 36, dim01: 47, dim02: 0.63 },
        { art: 37, dim01: 47, dim02: 0.78 },
        { art: 38, dim01: 77.5, dim02: 1.38 },
        { art: 39, dim01: 47, dim02: 0.78 },
        { art: 40, dim01: 47, dim02: 0.78 },
        { art: 41, dim01: 82, dim02: 1.48 },
        { art: 42, dim01: 77, dim02: 1.35 },
        { art: 43, dim01: 47, dim02: 0.8 },
      ];
      log(felpa);

      var artigo = 9; //flag

      function verification(l, c, d1, d2, n) {
        if (l == d1 && c == d2) {
          log("largura OK");
          const state = document.getElementsByClassName("state");
          state[n].style.backgroundColor = "green";
        } else {
          log("ERROR");
        }
      }

      function save() {
        let larg01 = parseFloat(document.querySelectorAll("input")[0].value);
        let comp01 = parseFloat(document.querySelectorAll("input")[1].value);
        /**/
        let larg02 = parseFloat(document.querySelectorAll("input")[2].value);
        let comp02 = parseFloat(document.querySelectorAll("input")[3].value);
        /**/
        let larg03 = parseFloat(document.querySelectorAll("input")[4].value);
        let comp03 = parseFloat(document.querySelectorAll("input")[5].value);
        switch (artigo) {
          case 3:
            verification(larg01, comp01, felpa[0].dim01, felpa[0].dim02, 0);
            verification(larg02, comp02, felpa[0].dim01, felpa[0].dim02, 1);
            verification(larg03, comp03, felpa[0].dim01, felpa[0].dim02, 2);
            break;
          case 9:
            verification(larg01, comp01, felpa[1].dim01, felpa[1].dim02, 0);
            verification(larg02, comp02, felpa[1].dim01, felpa[1].dim02, 1);
            verification(larg03, comp03, felpa[1].dim01, felpa[1].dim02, 2);
            break;
          case 7:
            verification(larg01, comp01, felpa[2].dim01, felpa[2].dim02, 0);
            verification(larg02, comp02, felpa[2].dim01, felpa[2].dim02, 1);
            verification(larg03, comp03, felpa[2].dim01, felpa[2].dim02, 2);
            break;
          case 25:
            verification(larg01, comp01, felpa[3].dim01, felpa[3].dim02, 0);
            verification(larg02, comp02, felpa[3].dim01, felpa[3].dim02, 1);
            verification(larg03, comp03, felpa[3].dim01, felpa[3].dim02, 2);
            break;
          case 15:
            verification(larg01, comp01, felpa[4].dim01, felpa[4].dim02, 0);
            verification(larg02, comp02, felpa[4].dim01, felpa[4].dim02, 1);
            verification(larg03, comp03, felpa[4].dim01, felpa[4].dim02, 2);
            break;
          case 23:
            verification(larg01, comp01, felpa[5].dim01, felpa[5].dim02, 0);
            verification(larg02, comp02, felpa[5].dim01, felpa[5].dim02, 1);
            verification(larg03, comp03, felpa[5].dim01, felpa[5].dim02, 2);
            break;
          case 17:
            verification(larg01, comp01, felpa[6].dim01, felpa[6].dim02, 0);
            verification(larg02, comp02, felpa[6].dim01, felpa[6].dim02, 1);
            verification(larg03, comp03, felpa[6].dim01, felpa[6].dim02, 2);
            break;
          case 19:
            verification(larg01, comp01, felpa[7].dim01, felpa[7].dim02, 0);
            verification(larg02, comp02, felpa[7].dim01, felpa[7].dim02, 1);
            verification(larg03, comp03, felpa[7].dim01, felpa[7].dim02, 2);
            break;
          case 26:
            verification(larg01, comp01, felpa[8].dim01, felpa[8].dim02, 0);
            verification(larg02, comp02, felpa[8].dim01, felpa[8].dim02, 1);
            verification(larg03, comp03, felpa[8].dim01, felpa[8].dim02, 2);
            break;
          case 29:
            verification(larg01, comp01, felpa[9].dim01, felpa[9].dim02, 0);
            verification(larg02, comp02, felpa[9].dim01, felpa[9].dim02, 1);
            verification(larg03, comp03, felpa[9].dim01, felpa[9].dim02, 2);
            break;
          case 27:
            verification(larg01, comp01, felpa[10].dim01, felpa[10].dim02, 0);
            verification(larg02, comp02, felpa[10].dim01, felpa[10].dim02, 1);
            verification(larg03, comp03, felpa[10].dim01, felpa[10].dim02, 2);
            break;
          case 30:
            verification(larg01, comp01, felpa[11].dim01, felpa[11].dim02, 0);
            verification(larg02, comp02, felpa[11].dim01, felpa[11].dim02, 1);
            verification(larg03, comp03, felpa[11].dim01, felpa[11].dim02, 2);
            break;
          case 28:
            verification(larg01, comp01, felpa[12].dim01, felpa[12].dim02, 0);
            verification(larg02, comp02, felpa[12].dim01, felpa[12].dim02, 1);
            verification(larg03, comp03, felpa[12].dim01, felpa[12].dim02, 2);
            break;
          case 31:
            verification(larg01, comp01, felpa[13].dim01, felpa[13].dim02, 0);
            verification(larg02, comp02, felpa[13].dim01, felpa[13].dim02, 1);
            verification(larg03, comp03, felpa[13].dim01, felpa[13].dim02, 2);
            break;
          case 32:
            verification(larg01, comp01, felpa[14].dim01, felpa[14].dim02, 0);
            verification(larg02, comp02, felpa[14].dim01, felpa[14].dim02, 1);
            verification(larg03, comp03, felpa[14].dim01, felpa[14].dim02, 2);
            break;
          case 33:
            verification(larg01, comp01, felpa[15].dim01, felpa[15].dim02, 0);
            verification(larg02, comp02, felpa[15].dim01, felpa[15].dim02, 1);
            verification(larg03, comp03, felpa[15].dim01, felpa[15].dim02, 2);
            break;
          case 34:
            verification(larg01, comp01, felpa[16].dim01, felpa[16].dim02, 0);
            verification(larg02, comp02, felpa[16].dim01, felpa[16].dim02, 1);
            verification(larg03, comp03, felpa[16].dim01, felpa[16].dim02, 2);
            break;
          case 35:
            verification(larg01, comp01, felpa[17].dim01, felpa[17].dim02, 0);
            verification(larg02, comp02, felpa[17].dim01, felpa[17].dim02, 1);
            verification(larg03, comp03, felpa[17].dim01, felpa[17].dim02, 2);
            break;
          case 36:
            verification(larg01, comp01, felpa[18].dim01, felpa[18].dim02, 0);
            verification(larg02, comp02, felpa[18].dim01, felpa[18].dim02, 1);
            verification(larg03, comp03, felpa[18].dim01, felpa[18].dim02, 2);
            break;
          case 37:
            verification(larg01, comp01, felpa[19].dim01, felpa[19].dim02, 0);
            verification(larg02, comp02, felpa[19].dim01, felpa[19].dim02, 1);
            verification(larg03, comp03, felpa[19].dim01, felpa[19].dim02, 2);
            break;
          case 38:
            verification(larg01, comp01, felpa[20].dim01, felpa[20].dim02, 0);
            verification(larg02, comp02, felpa[20].dim01, felpa[20].dim02, 1);
            verification(larg03, comp03, felpa[20].dim01, felpa[20].dim02, 2);
            break;
          case 39:
            verification(larg01, comp01, felpa[21].dim01, felpa[21].dim02, 0);
            verification(larg02, comp02, felpa[21].dim01, felpa[21].dim02, 1);
            verification(larg03, comp03, felpa[21].dim01, felpa[21].dim02, 2);
            break;
          case 40:
            verification(larg01, comp01, felpa[22].dim01, felpa[22].dim02, 0);
            verification(larg02, comp02, felpa[22].dim01, felpa[22].dim02, 1);
            verification(larg03, comp03, felpa[22].dim01, felpa[22].dim02, 2);
            break;
          case 41:
            verification(larg01, comp01, felpa[23].dim01, felpa[23].dim02, 0);
            verification(larg02, comp02, felpa[23].dim01, felpa[23].dim02, 1);
            verification(larg03, comp03, felpa[23].dim01, felpa[23].dim02, 2);
            break;
          case 42:
            verification(larg01, comp01, felpa[24].dim01, felpa[24].dim02, 0);
            verification(larg02, comp02, felpa[24].dim01, felpa[24].dim02, 1);
            verification(larg03, comp03, felpa[24].dim01, felpa[24].dim02, 2);
            break;
          case 43:
            verification(larg01, comp01, felpa[25].dim01, felpa[25].dim02, 0);
            verification(larg02, comp02, felpa[25].dim01, felpa[25].dim02, 1);
            verification(larg03, comp03, felpa[25].dim01, felpa[25].dim02, 2);
            break;

          default:
            log("!!!!!!");
        }
        document.getElementById("conf").style.display = "block";
        document.getElementById("sav").style.display = "none";
      }

  
	const request = window.indexedDB.open('meudb', 5);
	
	var db;
	
	request.onerror = function(event) {
	 log("erro ao abrir o banco de dados")
	}
	
	request.onupgradeneeded = function(event) {
	 log("atualizando banco de dados....");
	 db = event.target.result;
	 var objectStore = db.createObjectStore("estudantes", {keyPath: "teste"}); 
	}
	
	request.onsuccess = function(event) {
	 log("banco aberto com sucesso")
	 db = event.target.result;
	 
	 var transaction = db.transaction(["estudantes"], "readwrite");
	 
	 transaction.oncomplete = function(event) {
	     log("sucesso");
		};
		
     transaction.onerror = function(event) {
	     log("error");
		};	

		<!-- var Store = transaction.objectStore("estudantes"); -->
		<!-- Store.add({teste: '16', nome: 'j'}); -->
		
	 get()

	}
	
	    function confirm() {
		
		 var contador = parseInt(localStorage.getItem('geradorId'));
		 var valor = parseInt(contador + 1);
		 var gerador = localStorage.setItem('geradorId', valor);
		
		 log(contador);
		
		var transaction = db.transaction(["estudantes"], "readwrite");
		
        let larg01 = parseFloat(document.querySelectorAll("input")[0].value);
        let comp01 = parseFloat(document.querySelectorAll("input")[1].value);
        /**/
        let larg02 = parseFloat(document.querySelectorAll("input")[2].value);
        let comp02 = parseFloat(document.querySelectorAll("input")[3].value);
        /**/
        let larg03 = parseFloat(document.querySelectorAll("input")[4].value);
        let comp03 = parseFloat(document.querySelectorAll("input")[5].value);


		var Store = transaction.objectStore("estudantes");
		Store.add({teste: valor, a: larg01, b: comp01, c: larg02, d: comp02, e: larg03, f: comp03  });

        document.getElementById("conf").style.display = "none";
        document.getElementById("sav").style.display = "block";
      }
	
	function get() {
	
	 var transaction = db.transaction(["estudantes"], "readonly");
	 var teste = transaction.objectStore("estudantes");
	
	 	teste.openCursor().onsuccess = function(event) {
		const cursor = event.target.result;
		 if(cursor) {
			 //log(cursor.key + " " + cursor.value.nome);
			 cursor.continue();
			 
			 var c1 = cursor.value.c1;
			 var c2 = cursor.value.c2;
			 var c3 = cursor.value.c3;
			 
			 
			 criar(cursor.value.a, "col-1", c1);
			 criar(cursor.value.b, "col-2", c1);
			 criar(cursor.value.c, "col-3", c2);
			 criar(cursor.value.d, "col-4", c2);
			 criar(cursor.value.e, "col-5", c3);
			 criar(cursor.value.f, "col-6", c3);
		 }
		 else {
			log("Não encontrado")
		 }
		 
		}
	}
	
	
	function criar(x, col, cor) {
	
	var teste = document.querySelectorAll('p').length;
	
	if(teste == 0) {log("ok")}
	 const cont = document.createElement("p");
	 cont.innerHTML = x;
	 cont.style.border = "1px solid #fff";
	 document.getElementById(col).appendChild(cont);
	 
	 if(x == 'nome') {
	     cont.style.backgroundColor = "lime";
	 }
	 
	 	 if(cor == 'verde') {
	     cont.style.backgroundColor = "lime";
	 }
	 
	  	 if(cor == 'blue') {
	     cont.style.backgroundColor = "blue";
	 }
	 
	 
	 
	}
	
	log(document.querySelectorAll('p'));
	
 