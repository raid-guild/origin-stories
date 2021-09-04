// For MVP purposes only!!!

import { Fragment } from 'react/cjs/react.production.min';

const Article = () => {
    return (
        <Fragment>
            <div className="bg-primary col-span-3 h-48">Header</div>
            <div className="grid grid-cols-3">
                <div className="bg-secondary col-span-2">Main Section</div>
                <div className="bg-gray-600 col-span-1 sticky top-0 px-4">
                    <div className="container w-full">
                        <h1 className="text-white font-sans">Card</h1>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Article;
