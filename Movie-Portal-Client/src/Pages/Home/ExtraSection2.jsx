import React from 'react';

const ExtraSection2 = () => {
    return (
        <div className='my-10 lg:mx-40 mx-2 pb-20'>
             <h2 className='font-bold lg:text-4xl md:text-3xl text-xl my-6'>FAQ: Popular Movie Genres</h2>
             <hr />
            <div className="collapse collapse-arrow mt-6">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">Horror Movies</div>
                <div className="collapse-content">
                    <p className='font-bold'>What defines a horror movie?</p>
                     Horror movies are designed to elicit fear, suspense, and tension, often featuring supernatural elements, psychological scares, or terrifying scenarios.

                    <p className='font-bold'>What are some must-watch horror films?</p>
                    Some classics include The Exorcist, The Shining, Hereditary, A Nightmare on Elm Street, and Get Out.

                   <p className='font-bold'> What age group is horror suitable for?</p>
                    Most horror films are rated for mature audiences (18+) due to intense scares, violence, or gore. Always check the movie's rating before watching.

                    <p className='font-bold'>Do horror movies have to be scary?</p>
                   <p>Not necessarily. Some horror films blend humor (Shaun of the Dead), or focus on atmospheric dread rather than outright scares.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Adventure Movies</div>
                <div className="collapse-content">
                                        
                        <p className='font-bold'>What makes a movie an adventure film?</p>
                        Adventure movies focus on exciting journeys, exploration, and challenges. They often involve quests, exotic locations, and heroic characters.
                        <p className='font-bold'>
                        Can you recommend some great adventure films?</p>
                        Favorites include Indiana Jones series, The Lord of the Rings, Pirates of the Caribbean, Jurassic Park, and The Goonies.

                        <p className='font-bold'>Are adventure movies family-friendly?</p>
                        Many adventure movies are suitable for families, though some may have action scenes or themes that require parental guidance.

                        <p className='font-bold'>What sets adventure movies apart from action films?</p>
                        While both feature excitement, adventure movies emphasize exploration and journeys, while action films focus more on combat and intense physical conflict.
                </div>
                </div>
                <div className="collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Drama Movies</div>
                <div className="collapse-content">
                
                <p className='font-bold'>What is a drama movie?</p>
                Drama films focus on realistic storytelling, emotional depth, and character development. They often tackle serious themes and life situations.

              <p className='font-bold'>  What are some iconic drama films?</p>
                Classics include Forrest Gump, The Godfather, The Shawshank Redemption, Titanic, and Schindler's List.

               <p className='font-bold'> Are drama movies always serious?</p>
                While many drama films explore serious topics, they can also include lighter moments, romance, or inspiration (The Pursuit of Happyness).

               <p className='font-bold'> What is the appeal of drama movies?</p>
                Drama films resonate with viewers through relatable characters, heartfelt stories, and emotional impact.
                </div>
            </div>
        </div>
    );
};

export default ExtraSection2;