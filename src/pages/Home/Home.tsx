import { Button } from "@mantine/core";
import ArticleCard from "../../components/Article/ArticleCard"

const ArticleCards = [{
    id: 1,
    image: "ModerNik.png",
    category: "code",
    title: "Top 50 jokes about Yo Momma",
    views: 128,
    author: {
        name: "ModerNik",
        description: "posted 34 minutes ago",
        image: "ModerNik.png",
    }
}]

export const Home = () => {

    const postArticle = () => {
        let data = new FormData();
        let imagedata = 'ModerNik.png';
        data.append("data", imagedata);

        console.log(data);

        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: data
        })
            .then(response => response.json());

    };

    const Articles = ArticleCards.map((item) => (
        <ArticleCard key={item.id} props={item} />
    ));
    return (
        <div>
            {Articles}
            <Button onClick={postArticle} />
        </div>
    )
}