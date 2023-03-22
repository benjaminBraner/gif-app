import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem/>', () => {

   const title = "some title";
   const url = "https://someurl";
   const wrapper = shallow(<GifGridItem title={title} url={url} />);


   test('debe mostrar el componente correctamente', () => {

      expect(wrapper).toMatchSnapshot();
   })


   test('debe tener un parrafo con el title', () => {
      //estoy testeando si los argumentos que tengo en mis props se estan usando en el lugar donde yo espero
      const p = wrapper.find('p');
      expect(p.text().trim()).toBe(title);

   })


   test('debe tener la imagen igual al url y alt de los props', () => {

      const img = wrapper.find('img');

      /*enzyme ofrece el metodo .props() en el que se puede traer las properties de un elemento
      en forma de objeto:
         console.log(img.props().src);
      
      o si solo necesito una property del elemento
         console.log(img.prop('alt'));
      */
      expect(img.prop("src")).toBe(url);
      expect(img.prop("alt")).toBe(title);
   })
   

   test('debe tener la clase animate__bounce', () => {
      
      const div = wrapper.find('div');
      const className = div.prop('className');

      expect(className.includes('animate__bounce')).toBe(true);
   })


})

























