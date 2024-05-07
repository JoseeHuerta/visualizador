var contadorPaso = 0;
var turno=true;
var i=0;
var j=0;
/*True es para las blancas y false para las negras*/ 

function iniciar() {
  var celdas = document.getElementById("Tablero");
  celdas.rows[2].cells[1].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[2].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[3].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[4].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[5].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[6].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[7].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[8].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";

  celdas.rows[7].cells[1].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[2].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[3].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[4].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[5].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[6].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[7].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[8].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";

  celdas.rows[8].cells[3].style =
    "background-image: url(./img/AlfilB.png); background-size:cover;";
  celdas.rows[1].cells[3].style =
    "background-image: url(./img/AlfilN.png); background-size:cover;";
  celdas.rows[8].cells[6].style =
    "background-image: url(./img/AlfilB.png); background-size:cover;";
  celdas.rows[1].cells[6].style =
    "background-image: url(./img/AlfilN.png); background-size:cover;";

  celdas.rows[8].cells[1].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[1].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";
  celdas.rows[8].cells[8].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[8].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";

  celdas.rows[8].cells[1].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[1].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";
  celdas.rows[8].cells[8].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[8].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";

  celdas.rows[8].cells[2].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[2].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";
  celdas.rows[8].cells[7].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[7].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";

  celdas.rows[8].cells[2].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[2].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";

  celdas.rows[8].cells[4].style =
    "background-image: url(./img/ReyB.png); background-size:cover;";
  celdas.rows[1].cells[4].style =
    "background-image: url(./img/ReyN.png); background-size:cover;";

  celdas.rows[8].cells[5].style =
    "background-image: url(./img/ReinaB.png); background-size:cover;";
  celdas.rows[1].cells[5].style =
    "background-image: url(./img/ReinaN.png); background-size:cover;";
}

function partidas() {
  var textarea = document.getElementById("texto");
  var valor = document.getElementById("Combo").value;

  switch (valor) {
    case "0":
      textarea.value = "";
      break;
    case "1":
      textarea.value = `1. e4 e5
2. Nf3 Nc6
3. Bb5 a6
4. Ba4 Nf6
5. O-O Be7
6. Re1 b5
7. Bb3 O-O
8. h3 d6
9. c3 Na5
10. Bc2 c5
11. d4 Qc7
12. Nbd2 Bd7
13. Nf1 Rfc8
14. d5 Nc4
15. b3 Nb6
16. Ne3 c4
17. b4 a5
18. Bd2 axb4
19. cxb4 Na4
20. a3 c3
21. Bc1 Nb2
22. Qe2 Nc4
23. Nxc4 Qxc4
24. Bd3 Qxb4
25. axb4 Rxa1
26. Bxb5 Rxc1
27. Rxc1 Bxb5
28. Qxb5 Nxe4
29. Qd7 Rc4
30. Qxe7 g6
31. Nxe5 dxe5
32. d6 Nxd6
33. Qxd6 c2
34. b5 Kg7
35. b6 Rd4
36. Qxe5+ f6
37. Qxd4 Kh6
38. b7 g5
39. b8=Q Kh5
40. Qxf6 h6
41. Qe8+ Kh4
42. Qxh6#`;
      break;
    case "2":
      textarea.value = `1. d4 Nf6
2. c4 g6
3. Nc3 Bg7
4. e4 d6
5. f4 O-O
6. Nf3 c5
7. d5 e6
8. Be2 exd5
9. exd5 Re8
10. O-O Bf5
11. Bd3 Ne4
12. Nxe4 Bxe4
13. Bxe4 Rxe4
14. Ng5 Rxc4
15. f5 Rd4
16. Qf3 Qe8
17. f6 Bh8
18. Bf4 Qd8
19. Rae1 Na6
20. Nxf7 Kxf7
21. Re7+ Kf8
22. Bh6+ Kg8
23. f7#`;
      break;
    case "3":
      textarea.value = `1. e4 c5
2. Nf3 Nc6
3. d4 cxd4
4. Nxd4 Nf6
5. Nc3 d6
6. Bg5 e6
7. Qd2 a6
8. O-O-O Bd7
9. f4 b5
10. Bxf6 gxf6
11. f5 Qb6
12. fxe6 fxe6
13. Nxc6 Qxc6
14. Kb1 Qc5
15. Bd3 h5
16. Rhf1 Qe5
17. g3 b4
18. Ne2 Bh6
19. Qxb4 Ke7
20. Nd4 Rhb8
21. Qc3 Rc8
22. Qb4 Rab8
23. Qa3 Qxd4
24. Bxa6 Qb6
25. Bxc8 Rxc8
26. e5 fxe5
27. Qd3 Be8
28. Qh7+ Kd8
29. Qxh6 Rb8
30. Qxe6 Qxb2#`;
      break;
    default:
      break;
  }
}

function cargarPartida() {
  var archivo = document.getElementById("cargarBoton").files[0];
  var scanner = new FileReader();

  scanner.onload = function (e) {
    document.getElementById("texto").value = e.target.result;
    /*document.getElementById("texto").value = document.getElementById("cargarBoton").files;*/
  };
  scanner.readAsText(archivo);
}

async function  pasoApaso() {
  var celdas = document.getElementById("texto").value;
  /*celdas.rows[2].cells[1].style = "background-image: none; background-size:cover;";
  celdas.rows[3].cells[1].style = "background-image: url(./img/PeonN.png); background-size:cover;";
  switch(contadorPaso){
    case 0:
      celdas.rows[2].cells[1].style = "background-image: none; background-size:cover;";
      celdas.rows[3].cells[1].style = "background-image: url(./img/PeonN.png); background-size:cover;";
      break;
    case 1:
      celdas.rows[2].cells[2].style = "background-image: none; background-size:cover;";
      celdas.rows[3].cells[2].style = "background-image: url(./img/PeonN.png); background-size:cover;";
      break;
  }
  contadorPaso++;*/

  var tabla = document.getElementById("Tablero");
  var lineas = celdas.split("\n");
  //for (let i = 0; i < lineas.length; i++) {
    //alert(lineas[i]);
    var tokens = lineas[i].split(" ");
    //for (let j = 1; j < tokens.length; j++) {
      //alert(tokens[j]);
      //alert(tieneMayusculas(tokens[j]));
      j=1;
      if (!tieneMayusculas(tokens[j])) {
        //alert("Si soy un Peon y me moví a "+tokens[j]);
        var posicion = tokens[j].split(/(\d+)/);
        //El usar alert no se recomienda porque no puedes hacer nada en la página, se recomienda usar el console.log
        console.log(
          "Columna " +
            convertirLetraNumero(posicion[0]) +
            " renglon " +
            posicion[1]
        );
        var columna = parseInt(convertirLetraNumero(posicion[0]));
        var renglon = parseInt(posicion[1]);
        if(turno){
          tabla.rows[renglon+1].cells[columna+1].style =
        
          "background-image: url(./img/PeonB.png); background-size:cover;";
        }else{
          tabla.rows[renglon+1].cells[columna+1].style =
        
          "background-image: url(./img/PeonN.png); background-size:cover;";
        
        } 
      }
      turno=!turno;
      document.getElementById("turno").innerHTML = "Turno de las: / Who´s up: "+(turno?"blancas / whites ":"negras / blacks " )+renglon+" "+columna;
      await new Promise((resolve) => setTimeout(resolve, 3000)) ;
    //}
  //}
i++;
  
}

function tieneMayusculas(cadena) {
  return /[A-Z]/.test(cadena);
}
function convertirLetraNumero(letra) {
  switch (letra) {
    case "a":
      return 0;
      break;

    case "b":
      return 1;
      break;

    case "c":
      return 2;
      break;

    case "d":
      return 3;
      break;

    case "e":
      return 4;
      break;

    case "f":
      return 5;
      break;

    case "g":
      return 6;
      break;

    case "h":
      return 7;
      break;
  }
}

async function test() {
  var salida = "";
  for (let i = 0; i < 10; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    salida += i + "<br>";
    document.getElementById("out").innerHTML = salida;
  }
}