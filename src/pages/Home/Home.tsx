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

    const Articles = ArticleCards.map((item) => (
        <ArticleCard key={item.id} props={item} />
        ));
    return (
        <div>
            {Articles}
        </div>
    )
}