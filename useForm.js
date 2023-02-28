import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm )

    const onInputChange = ( { target } ) => {

        const { name, value } = target;
       
        setFormState({
            ...formState,
            [name]: value //Establesco a la propiedad name, los nuevos value.
        })

    }

    const onResetForm = (  ) => {
        setFormState( initialForm )
    }

  return {
    ...formState,  //Si esparcimos (...formState) enviado en el objeto de useForm(), podemos desestructurara directamente y ahorrarnos esta linea.
    formState,
    onInputChange,
    onResetForm
  }

}
