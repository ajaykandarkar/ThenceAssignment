import * as Yup from 'yup';
const GetProjectSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, '! Name is  too Short!')
      .max(50, ' ! Name s too Long!')
      .required('! Required'),
      email: Yup.string().email('! Enter a valid email address').required(' ! Required'),
    });

  export default GetProjectSchema;