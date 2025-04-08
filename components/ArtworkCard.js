import useSWR from "swr";
import Error from "next/error";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";

export default function ArtworkCard(objectID) {
    const { data, error, isLoading } = useSWR('https://collectionapi.metmuseum.org/public/collection/v1/objects/'+objectID, fetcher);
 
    if (error) return(
        <>
        <Error statusCode={404} />
        </>
    )
    if (isLoading) return null

    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        {data.objectDate}
                        {data.classification}
                        {data.medium}
                    </Card.Text>
                    <Link href='https://collectionapi.metmuseum.org/public/collection/v1/artwork/${objectID}' passHref><Button variant="primary"></Button></Link>
                </Card.Body>
            </Card>
        </>
    )
}