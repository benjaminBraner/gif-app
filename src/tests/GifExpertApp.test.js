import { shallow } from "enzyme";
import {GifExpertApp} from '../GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => {
   
   test('debe mostrarse correctamente', () => {
      const wrapper = shallow(<GifExpertApp/>);
      expect(wrapper).toMatchSnapshot();
   })
   
   
})
