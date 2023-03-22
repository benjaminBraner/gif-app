import { useFetchGifs } from "../../hooks/useFetchGifs"
import {renderHook} from "@testing-library/react-hooks"

describe('Pruebas en el hook useFetchGifs', () => {
   /*para hacer tests de los hooks es un poco distinto, primero hay que instalar una libreria 
   que sirve para hacer pruebas con los hooks,
   
   npm install --save-dev @testing-library/react-hooks

   no necesita hacer ninguna configuracion en el setUpTests.js

   */
  
   test('debe retornar el estado inicial', () => {
      /*ya que no se puede probar hooks a menos que sea dentro de un componente, lo que hace
      renderHook() es crear un componente virtual y dentro de los parentesis en un callback
      ahi va a ejecutar mi CustomeHook*/

      // const resp = renderHook(() => useFetchGifs("Goku"))

      /*esto va a traer un objeto con diferentes propiedades:
      {
      result: { all: [Getter], current: [Getter], error: [Getter] },
      rerender: [Function: rerenderHook],
      unmount: [Function: unmountHook],
      waitFor: [AsyncFunction: waitFor],
      waitForValueToChange: [AsyncFunction: waitForValueToChange],
      waitForNextUpdate: [AsyncFunction: waitForNextUpdate]
      }*/

      //ahora con desestructuracion voy a sacar el valor que me interesa
      const {result} = renderHook(() => useFetchGifs("Goku"))

      //result.current es el valor actual que tiene ese CustomeHook
      const {data,loading} = result.current;

      // console.log(data,loading);

      expect(data).toEqual([]);
      expect(loading).toBe(true);

   })


   test('debe retornar un arreglo de imgs y el loading en false', () => {
      
   })
   

})
