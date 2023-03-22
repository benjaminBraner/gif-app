import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"


describe('Pruebas en <AddCategory/>', () => {
     /*con esta funcion setCategories que me invente yo no tengo manera de ver si se llamo o con 
     que argumentos se hizo, etc pero jest ya ofrece eso, por lo tanto solo tendria que cambiar
     esto:
     const setCategories = () => {};
  
     por esto:
     const setCategories = jest.fn();
  
     funcionaria exactamente igual pero la diferencia es que ahora ya tengo la referencia para eva-
     luar ciertas cosas un poco mas complejas por ejm si fue llamada, cuantas veces fue llamada,etc..   */

     const setCategories = jest.fn();
     // const setCategories = () => {};

     let wrapper = shallow(<AddCategory setCategories={setCategories} />);
     let input;
     beforeEach(() => {
          /*esto usualmente se llama para que si tendria algun mock o alguna simulacion de algo,
          todo se limpie */
          jest.clearAllMocks();
          wrapper = shallow(<AddCategory setCategories={setCategories} />);
          input = wrapper.find('input');
     })


     test('debe mostrarse correctamente', () => {

          expect(wrapper).toMatchSnapshot();
     })


     test('debe cambiar el input', () => {
          //SIMULAR CAMBIOS EN UN INPUT

          const value = "Hola Mundo";
          /*de esta manere simulo que hubo un cambio en el input, si lo dejo asi, solo con el change
          me lanzaria un error que el e (el evento) es undefined, por lo tanto tengo que mandar 
          un segundo parametro que es un objeto que representaria el evento */
          input.simulate('change', { target: { value } });
          // input.simulate('change', {target: {value:value}});

          expect(wrapper.find('p').text().trim()).toBe(value)
     })


     test('NO debe postear la informacion con submit', () => {
          wrapper.find('form').simulate('submit', { preventDefault() { } })
          // wrapper.find('form').simulate('submit', {preventDefault: () => {}})

          /*espero que la funcion setCategories no se haya llamado */
          expect(setCategories).not.toHaveBeenCalled()
     })


     test('debe llamar el setCategories y limpiar la caja de texto', () => {
          const value = "hello world";
          input.simulate('change', { target: { value: value } })

          wrapper.find('form').simulate('submit', { preventDefault() { } })

          expect(setCategories).toHaveBeenCalled();

          expect(wrapper.find('input').prop('value')).toBe('');

          /*otra cosa muy util es esto:
          
          esto sirve para esperar un numero de veces determinado que mi funcion debe ser llamada:
          expect(setCategories).toHaveBeenCalledTimes(2)
          
          esto sirve para esperar que el argumento de la funcion tiene que ser cualquier tipo de funcion 
          si o si,osea un callback:
          expect(setCategories).toHaveBeenCalledWith( expect.any(Function) )*/
     })


})
