import { publish } from "gh-pages"
import path from "path"
publish(path.resolve(__dirname, "./dist"),
    {
        dotfiles: true
    },
    (err) => {
        if (err) {
            console.error(err)
        }
    }
);