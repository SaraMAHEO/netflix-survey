import React, { useContext } from 'react';
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import { UserContext } from "../context/UserContext";


const About = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <Logo />
            <pre className="countries">{JSON.stringify(user, null, 2)}</pre>
            <Navigation />
            <h1>A propos</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quasi maxime praesentium nemo ipsam labore aperiam obcaecati cupiditate, perspiciatis asperiores dolores porro eligendi laudantium est rerum vel optio, itaque, maiores et consequuntur debitis quo vitae alias laboriosam? Omnis repellendus quia eius, nulla explicabo dolore neque voluptate dolorem ad cupiditate, soluta accusantium hic rem laudantium quas voluptatum error molestias adipisci placeat fuga ab. Dolorem libero, cupiditate deleniti eaque, nihil maxime, reiciendis minima necessitatibus temporibus ad dolorum sunt a. Dolore cumque ex error cupiditate nostrum velit suscipit a facilis. Nemo commodi vero ratione, non tempora consequatur aspernatur doloremque in numquam autem nobis.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem sapiente fuga distinctio alias, animi, asperiores corrupti iure at vitae quae mollitia officia provident quasi! Esse atque ut aut beatae voluptate similique earum facere libero, commodi, veniam, labore quod cupiditate aliquam sapiente. Repellendus et saepe molestiae odio omnis explicabo doloribus similique veniam, fugiat voluptas expedita ullam voluptatem quam qui commodi, quod non officiis nostrum! Animi blanditiis aliquid saepe id debitis dolorum. Facilis rerum alias nam, maxime illum aliquam velit delectus laborum officiis optio totam architecto nulla quas at odio eligendi est et nobis exercitationem sit ipsum nemo quae. Nostrum quo expedita fugit ducimus nam ipsa sunt tempore, sequi quasi quibusdam illum illo nobis, placeat assumenda cumque enim architecto, facilis aspernatur dolor doloremque iure corrupti omnis vel. Excepturi error deleniti officiis officia accusantium. Nulla impedit magnam sed, fugit omnis natus deleniti soluta mollitia est necessitatibus tempore eius quos obcaecati ratione, id nisi aut suscipit maxime sint labore sequi illo aperiam placeat. Earum fugiat accusamus voluptates itaque soluta aspernatur, autem in reiciendis aperiam ullam, temporibus repudiandae libero quibusdam voluptate iure fuga. Tenetur, ipsa voluptatibus voluptates quasi dolorum eveniet adipisci optio mollitia obcaecati tempora quas perferendis, eaque ipsum molestias enim culpa. Amet, corporis.</p>
        </div>
    );
};

export default About;