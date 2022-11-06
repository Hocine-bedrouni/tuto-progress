

export default function Home() {
    return (
        <div>
            <div className={"home"}>
                <h1>My progression</h1>
                <div>Bienvenue sur le site pour votre formation React</div>
                { new Date().toString()}
            </div>
        </div>
    );
};

