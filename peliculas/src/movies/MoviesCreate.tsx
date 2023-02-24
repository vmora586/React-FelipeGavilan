
import MoviesForm from "./MoviesForm";

export default function MoviesCreate() {
    return (
        <MoviesForm model={{ title: '', onTheaters: false, trailer: '' }}
            onSubmit={(values) => { console.log(values) }} />
    )
}