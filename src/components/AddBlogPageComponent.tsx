import {useContext, FC} from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { RouteComponentProps } from 'react-router-dom';
import { ContextApp } from '../state/reducer';
import { AddArticleInputs } from '../state/types';
import { ADD_ARTICLE } from '../state/constants';

const AddBlogPageComponent: FC<RouteComponentProps> = () => {
    const { dispatch }= useContext(ContextApp);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<AddArticleInputs>();
    
    const onSubmit: SubmitHandler<AddArticleInputs> = data => {
      dispatch({type: ADD_ARTICLE, payload: data})
    };

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register("title",{ required: true })} />
          {errors.title && <span>This field is required</span>}
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("body", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.body && <span>This field is required</span>}
          
          <input type="submit" />
        </form>
      </>
    );
}
  
export default AddBlogPageComponent;