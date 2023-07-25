import { CurrentFilm } from "../components/CurrentFilm";
import { Favorite } from "../components/Favorites";
import { Home } from "../components/Home";
import { Movies } from "../components/Movies";
import { Multfilms } from "../components/Mulfilms";
import { Person } from "../components/Person";
import { Persons } from "../components/Persons";
import { Series } from "../components/Series";

export const routes = [
    {
        id: 1,
        element: <Home />,
        to: '/homepage'
    },
    {
        id: 2,
        element: <Movies />,
        to: '/movies'
    },
    {
        id: 3,
        element: <Series />,
        to: '/series'
    },
    {
        id: 4,
        element: <Multfilms />,
        to: '/multfilms'
    },
    {
        id: 6,
        element: <CurrentFilm />,
        to: '/movies/:id'
    },
    {
        id: 5,
        element: <CurrentFilm />,
        to: '/multfilms/:id'
    },
    {
        id: 7,
        element: <CurrentFilm />,
        to: '/series/:id'
    },
    {
        id: 8,
        element: <Persons />,
        to: '/movies/:id/persons'
    },
    {
        id: 9,
        element: <Persons />,
        to: '/series/:id/persons'
    },
    {
        id: 10,
        element: <Persons />,
        to: '/multfilms/:id/persons'
    },
    {
        id: 11,
        element: <Favorite />,
        to: '/favorite'
    },
    {
        id: 12,
        element: <Person />,
        to: '/person/:id'
    }
]