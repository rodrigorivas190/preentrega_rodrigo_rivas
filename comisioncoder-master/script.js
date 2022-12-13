

alert ( "Bienvenid@ a Coder ")
let nombre1 = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let alumno2 =  alert(`"Bienvenid@ ${nombre1} ${apellido}`);
let matricula = prompt("Ingrese su comision");


 //Menu Principal

let seleccion = prompt(" desea ver si aprobo la cursada si o no")
//  var opc = 0
 while (seleccion != "si" && seleccion != "no"){
    alert(" por favor ingresa si o no")
 seleccion = prompt("desea ver los resultados si o no");
 
 
 }
    
 if (seleccion == "si"){
   alert("Verifique que este en listado de alumnos") 


   let alumnos = [
    {
      nombre: "Mariano Damian",
      apellido: "Hernandez",
      notas: [8, 7, 9, 10, 6],
    },
    {
      nombre: "Ramiro",
      apellido: "Diaz",
      notas: [1, 3, 8, 2, 1],
    },
    {
      nombre: "Ana",
      apellido: "Armella",
      notas: [5, 7, 9, 4, 2],
    },
    {
      nombre: "Romina",
      apellido: "Almeda",
      notas: [10, 6, 7, 5, 9],
    },
    {
      nombre: "Denis",
      apellido: "Tolaba",
      notas: [10, 10, 9, 9, 10],
    },
    {
      nombre: "Hugo",
      apellido: "Castellano",
      notas: [2, 3, 3, 6, 1],
    },
    {
      nombre: "Analia Daiana",
      apellido: "Fonseca",
      notas: [4, 3, 4, 5, 2],
    },
    {
      nombre: "Francisco Daniel",
      apellido: "Samir",
      notas: [5, 5, 6, 4, 2],
    },
  ];
   let todosLosAlumnos = alumnos.map( (alumno) => alumno.nombre + " " + alumno.apellido);
    alert (todosLosAlumnos.join(" - "))
    window.alert(" Si esta en el listado presione el boton aprobados o desaprobado en la pagina principal)") 
    

    function promedio(array, estado) {
        let newArray = [];
      
        array.forEach((element) => {
          let notas = element.notas;
          let i = 0;
      
          notas.map((e) => (i += e));
      
          let promedio = i / notas.length;
      
          let objeto = {
            nombreCompleto: `${element.nombre}
                             ${element.apellido}`,
            promedio: Math.round(promedio),
          };
      
          objeto.promedio > 5
            ? (objeto.estado = "aprobado")
            : (objeto.estado = "desaprobado");
      
          if (objeto.estado == estado) 
          newArray.push(objeto);
          
              
        });
      
        return newArray;
       
      }
      // obtengo resultados
      promedio(alumnos, "aprobado");
      promedio(alumnos, "desaprobado");
    
        // imprimo en consola
        function aprobado (){
            console.table(promedio(alumnos, "aprobado")); 
            
        let todosLosAprobados =  promedio(alumnos, "aprobado");
        alert (JSON.stringify(todosLosAprobados[ 0 ].nombreCompleto)) 
        alert (JSON.stringify(todosLosAprobados[ 1 ].nombreCompleto)) 
        alert (JSON.stringify(todosLosAprobados[ 2 ].nombreCompleto)) 
        
        }
    
        function desaprobado (){
            console.table(promedio(alumnos, "desaprobado"));
    
            let todosLosDesaprobados =  promedio(alumnos, "desaprobado");
            alert (JSON.stringify(todosLosDesaprobados[ 0 ].nombreCompleto)) 
            alert (JSON.stringify(todosLosDesaprobados[ 1 ].nombreCompleto)) 
            alert (JSON.stringify(todosLosDesaprobados[ 2 ].nombreCompleto)) 
            alert (JSON.stringify(todosLosDesaprobados[ 3 ].nombreCompleto)) 
            alert (JSON.stringify(todosLosDesaprobados[ 4 ].nombreCompleto)) 
        }
   
 }

 else {
    
    window.alert("Gracias quedamos en contacto, anotate ahora a los cursos.")
 }
 
while(seleccion != "si"){ 
    alert("lista de cursos para cursar")
    const materia = [

        {
        nombre: " java ",
        precio: 12000 ,
        },
        {
        nombre: " javascrip ",
        precio: 20000 ,
        },
        {
        nombre: " desarrollo web ",
        precio: 25000 ,
        },
        {
        nombre: " ingles ",
        precio: 18000 ,
        },
        {
        nombre: " riack ",
        precio: 30000 ,
        },
    
    ]
    let carritto = []
    let todaslasMatrerias = materia.map(
        (material) => material.nombre + " " + material.precio + "$");
        alert(todaslasMatrerias.join(" - "))

    let cursos = parseInt( prompt(" cuantas matrias te quieres anotar"))
    let materias = prompt ("anotarse en la materia elegida")
    seleccion = prompt("quiere anotarse en otra materia?")
    let precio = 0 

    if (materias == "java" || materias == "javascrip" || materias == "desarrollo web" || materias == "ingles" || materias == "riack" ){
        switch(materias) {
            case "java":
            precio = 12000
            break
            case "javascrip":
            precio = 20000
            break
            case "desarrollo web":
            precio = 25000
            break
            case "ingles":
            precio = 18000
            break
            case "riack":
            precio = 30000
            break
            default:
            break
        }
    

    carritto.push({materias, cursos, precio})
    console.log(carritto)

    


    }else {
        alert("no hay cupo para el curso")

    }
    
        alert("gracias por anotarse en nuestros cursos")
        carritto.forEach((carritoFinal) => {
            console.log(`materias: ${carritoFinal.materias}, cursos ${carritoFinal.cursos},
            precio ${carritoFinal.precio}, total a pagar por curso ${carritoFinal.cursos * carritoFinal.precio}`)
        })
     break; 
     const total = carritto.reduce((acc, el) => acc + el.precio * el.cursos, 0)
     console.log(`el total a pagar es: ${total}`)  
    }

   

