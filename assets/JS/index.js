
class Personaje {
    constructor ( id, name, heigth, weigth ) {
        this.id     = id 
        this.nombre = name;
        this.altura = heigth;
        this.peso = weigth;
    }
}

async function* generador( desde, hasta ) {
    let iterador = desde

    while ( iterador <= hasta ) {

        let urlBase = "https://swapi.dev/api/people/"

        let url = `${ urlBase }${ iterador }`  //"https://swapi.dev/api/people/1"

        let respuesta = await fetch( url );
        let data = await respuesta.json()

        let id = iterador
        let nombre = data.name
        let peso = data.mass
        let altura = data.height


        // console.log(data)
        // console.log(id)
        // console.log(nombre)    
        // console.log(peso)    
        // console.log(altura)    

        let nuevoPersonaje = new Personaje( id, nombre, peso, altura )

        // console.log(nuevoPersonaje)

        yield nuevoPersonaje

        iterador++
    }
}

// generador( 1, 5).next()

const firstGenerator = generador(1, 5);

const secondGenerator = generador(6, 10);
const thirdGenerator = generador(11, 16);

let primer_div = document.getElementById("id_uno")
primer_div.addEventListener("dblclick", async () => {
    
    const personaje1_5 = await firstGenerator.next() 
    if(personaje1_5.value === undefined ) {
        return
    } else {

        let nombre = personaje1_5.value.nombre
        let altura = personaje1_5.value.altura
        let peso = personaje1_5.value.peso

        let nuevaCard = primer_div.innerHTML;

        nuevaCard += `
            <div class="col-md-4 col-lg-3 p-3">
                <div class="card black_bg" >
                    <div class="card-header d-flex">
                        <span class="circulo_tageta1"></span>
                        <h3>${ nombre }.</h3>
                    </div>
                    <div class="card-body d-flex">
                        <p>Estatura: ${ altura }cm - Peso: ${ peso }Kg.</p>
                    </div>
                </div>
            </div>
        `;
        primer_div.innerHTML = nuevaCard;
    }
})

/* segunda targeta */

let segundo_div = document.getElementById("id_dos")
segundo_div.addEventListener("dblclick", async () => {
    
    const personaje6_10 = await secondGenerator.next() 
    if(personaje6_10.value === undefined ) {
        return
    } else {

        let nombre = personaje6_10.value.nombre
        let altura = personaje6_10.value.altura
        let peso = personaje6_10.value.peso

        let nuevaCard2 = segundo_div.innerHTML;

        nuevaCard2 += `
            <div class="col-md-4 col-lg-3 p-3">
                <div class="card black_bg" >
                    <div class="card-header d-flex">
                        <span class="circulo_tageta2"></span>
                        <h3>${ nombre }.</h3>
                    </div>
                    <div class="card-body d-flex">
                        <p>Estatura: ${ altura }cm - Peso: ${ peso }Kg.</p>
                    </div>
                </div>
            </div>
        `;
        segundo_div.innerHTML = nuevaCard2;
    }
})

/* tercera targeta */

let tercer_div = document.getElementById("id_tres")
tercer_div.addEventListener("dblclick", async () => {
    
    const personaje11_17 = await thirdGenerator.next() 
    if(personaje11_17.value === undefined ) {
        return
    } else {

        let nombre = personaje11_17.value.nombre
        let altura = personaje11_17.value.altura
        let peso = personaje11_17.value.peso

        let nuevaCard3 = tercer_div.innerHTML;

        nuevaCard3 += `
            <div class="col-md-4 col-lg-3 p-3">
                <div class="card black_bg" >
                    <div class="card-header d-flex">
                        <span class="circulo_tageta3"></span>
                        <h3>${ nombre }.</h3>
                    </div>
                    <div class="card-body d-flex">
                        <p>Estatura: ${ altura }cm - Peso: ${ peso }Kg.</p>
                    </div>
                </div>
            </div>
        `;
        tercer_div.innerHTML = nuevaCard3;
    }
})