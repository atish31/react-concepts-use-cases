import { useParams, useSearchParams } from 'react-router-dom';

export const Page4 = () => {
    const params = useParams();
    const [searchParams, setPrams] = useSearchParams();
    console.log(params);
    console.log(searchParams.get('q'), 'search')
    return <>This is page 4 and id is: {params.id}</>
}