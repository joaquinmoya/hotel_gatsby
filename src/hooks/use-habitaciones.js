//Cuando querramos reutilizar una consulta la colocamos en un hook
import {graphql,useStaticQuery} from 'gatsby';

const useHabitaciones = () => {
    const data = useStaticQuery(graphql`
    query {
        allDatoCmsHabitacion{
                nodes{
                        titulo
                        id
                        slug
                        contenido
                        imagen{
                            gatsbyImageData
              }
            }
        }
    }
    `)
    console.log(data);
}

export default useHabitaciones;

