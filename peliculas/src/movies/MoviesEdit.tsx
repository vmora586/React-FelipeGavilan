import MoviesForm from "./MoviesForm";

export default function MoviesEdit() {
    return (
        <MoviesForm model={{ onTheaters: true, title: 'Spider-man', trailer: '' }}
            onSubmit={(values) => {
                console.log(values);
            }} />
    )
}