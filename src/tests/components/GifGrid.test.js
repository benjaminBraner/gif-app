import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");


describe('Pruebas en el <GifGrid/>', () => {

   const category = "Hello";

   test('debe marcar el snapshot', () => {

      /*lo que hace esto es que cuando se llame el useFetchGifs dentro de mi componente, va a 
      regresar lo que sea que este entre los parentesis, en este caso pongo eso porque por 
      defecto esos son los valores que el useFetchGifs regresa */
      useFetchGifs.mockReturnValue({
         data: [],
         loading: true
      })

      const wrapper = shallow(<GifGrid category={category} />);
      expect(wrapper).toMatchSnapshot();
   })

   test('debe mostrar items cuando se cargan imagenes con el useFetchGifs', () => {


      const gifs = [{
         id: 'abc',
         url: 'https://localhost/hola/imagen.jpg',
         title: 'cualquier cosa'
      },
      {
         id: 'def',
         url: 'https://localhost/hola/imagen.jpg',
         title: 'cualquier cosa'
      }

      ]
      /*a diferencia del anterior test, ahora necesito de alguna manera fingir que ya tengo la data
      de la api, por lo tanto este test es cuando mi useFetchGifs ya me regresa la data
      
      QUE ES UN MOCK?
      es una simulacion manual usada para sustituir funcionalidades con datos falsos, como falsear 
      algo por ejm para que mi componente crea que ya tiene la informacion resuelta, y asi hacer 
      los tests mas rapido
      
      

      antes de que se haga esta renderizacion:
      const wrapper = shallow(<GifGrid category={category}/>);
      
      yo puedo simular que cuando el componente llame a mi useFetchGifs, ya tenga data:
      
      1.importo el useFetchGifs en la parte de arriba
      import { useFetchGifs } from "../../hooks/useFetchGifs";
      jest.mock("../../hooks/useFetchGifs");
      
      el jest.mock("path") es para fingir cualquier llamada a ese archivo y controlar la data que
      este va a responder
      */

      /*ahora lo que hago aqui es lo mismo que el test de arriba pero esta vez evaluandolo cuando
      ya tengo la data, osea ahora voy a suponer que el loading esta en false (es decir que ya
       tengo la informacion) y la data van a ser los gifs*/

      useFetchGifs.mockReturnValue({
         data: gifs,
         loading: false
      })
      const wrapper = shallow(<GifGrid category={category} />);

      //ahora viene la evaluacion

      // expect(wrapper).toMatchSnapshot();
      /*este test funciona pero no es muy confiable porque por ejm, como estoy haciendo el snapshot
      si yo quitara el objeto que esta dentro del array gifs, la prueba va a fallar, pero fallaria
      porque se cambio el snapshot nada mas, y si actualizo el snapshot se resolveria, y no deberia
      de comportarse asi, por eso hay formas mas seguras de evaluar esto de forma mas estricta:*/


      //espero que el parrafo "Loading" no exista porque asi se que ya tiene la data
      expect(wrapper.find('p').exists()).toBe(false);
      /*espero que el numero de componentes GifGridItem (que es el componente que trae cada objeto
      del array gifs por separado) sea igual al numero de objetos que tiene el array gifs*/
      expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

   })

})
