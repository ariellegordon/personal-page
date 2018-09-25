import React, { Component } from "react";
import "./About.css";
import personalPhoto from "./personal-photo.jpeg";

class About extends Component {
  constructor() {
    super();
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  handleMouseOver() {
    let route1 = document.querySelector("#route1");
    let route2 = document.querySelector("#route2");
    let route3 = document.querySelector("#route3");
    [route1, route2, route3].forEach(elem => elem.classList.remove("visible"));
  }
  render() {
    return (
      <div className="About-page" onMouseOver={this.handleMouseOver}>
        <div className="About-container">
          <div className="personal-photo">
            <img src={personalPhoto} className="responsive" />
            <figcaption>Wearing many hats at SXSW 2018</figcaption>
          </div>
          <div className="About-text">
            Lorem ipsum dolor amet echo park tote bag try-hard whatever drinking
            vinegar yuccie air plant, meggings skateboard polaroid. Godard roof
            party food truck XOXO swag unicorn DIY iceland, post-ironic lo-fi
            small batch ennui. Copper mug photo booth occupy woke cred snackwave
            health goth unicorn slow-carb. Church-key quinoa synth plaid blog,
            try-hard dreamcatcher small batch jean shorts mixtape hammock tbh
            irony asymmetrical. Chicharrones cred fam pour-over blue bottle
            butcher pitchfork vegan quinoa locavore. Chillwave scenester shaman
            drinking vinegar pickled tilde gentrify fingerstache la croix. Art
            party YOLO distillery church-key. Prism brunch palo santo, kogi
            vaporware sriracha swag keffiyeh. Try-hard single-origin coffee etsy
            photo booth PBR&B narwhal disrupt swag whatever. Ennui cardigan
            paleo pabst sartorial austin trust fund stumptown. Quinoa meggings
            meh twee leggings selfies green juice pop-up prism. Small batch
            hammock flexitarian hell of chillwave, disrupt fashion axe blog
            squid kale chips affogato glossier. Gentrify craft beer bespoke 90's
            tote bag blue bottle umami cold-pressed lo-fi you probably haven't
            heard of them fam scenester. Food truck microdosing chartreuse, DIY
            meggings four dollar toast tumblr viral direct trade dreamcatcher
            try-hard actually drinking vinegar leggings. Pop-up kombucha
            taiyaki, polaroid letterpress vape synth mixtape. +1 iceland 3 wolf
            moon selfies. Lyft selfies locavore photo booth fanny pack DIY
            taiyaki selvage banjo palo santo flannel. Chia sartorial wolf,
            waistcoat twee lomo YOLO vegan aesthetic hoodie adaptogen
            intelligentsia you probably haven't heard of them. Polaroid
            shoreditch yuccie heirloom. Edison bulb try-hard beard, mumblecore
            hammock vinyl man bun live-edge messenger bag lomo. Yuccie beard
            tote bag enamel pin tofu man bun DIY viral. DIY literally messenger
            bag hell of bitters taxidermy. 3 wolf moon brunch craft beer tbh
            health goth chia, plaid cray food truck. Slow-carb sriracha mlkshk
            pabst retro, pug roof party gluten-free jean shorts distillery ramps
            kale chips franzen. Authentic listicle 90's swag, hashtag 8-bit
            mustache jean shorts kombucha. Helvetica bushwick wayfarers polaroid
            copper mug pabst jean shorts pitchfork poutine kickstarter tote bag.
            Craft beer food truck fashion axe brooklyn, man bun sartorial
            humblebrag deep v edison bulb. Ramps austin sartorial godard pork
            belly chia tbh. Chartreuse poutine kale chips venmo, irony vape meh
            taxidermy selfies roof party messenger bag meggings. Austin polaroid
            shaman whatever PBR&B hell of art party. Mlkshk banjo waistcoat
            pop-up. Chambray locavore chia banjo sartorial. Ennui forage
            asymmetrical la croix, godard locavore plaid unicorn intelligentsia.
            Messenger bag put a bird on it thundercats food truck vape meh
            franzen deep v iPhone. Bitters narwhal food truck venmo. Whatever
            four loko ennui woke, banh mi literally authentic echo park
            gluten-free. Kickstarter taiyaki sustainable keytar plaid try-hard.
            Occupy enamel pin migas, edison bulb kogi XOXO synth irony pinterest
            8-bit prism palo santo. Keytar forage ethical cray salvia cornhole
            yuccie. Jianbing swag snackwave tilde cliche. You probably haven't
            heard of them single-origin coffee flannel freegan, ennui aesthetic
            farm-to-table waistcoat semiotics. Polaroid wolf woke tbh, everyday
            carry cronut roof party chillwave kickstarter tumblr. Wolf before
            they sold out green juice pork belly thundercats plaid yr authentic
            3 wolf moon fingerstache quinoa. Kitsch pug fanny pack, ramps hoodie
            forage literally migas vegan health goth ennui street art
            lumbersexual tacos. Live-edge DIY 90's fashion axe twee, tumblr
            raclette tote bag 3 wolf moon squid tousled polaroid. Succulents
            swag kitsch humblebrag shabby chic poke. You probably haven't heard
            of them sustainable shaman, waistcoat tacos bitters keffiyeh food
            truck 8-bit selfies poke knausgaard etsy artisan succulents.
            Flexitarian enamel pin gochujang, forage affogato ugh venmo flannel.
            Cred helvetica next level shoreditch poke. Thundercats shaman woke,
            butcher aesthetic umami succulents la croix cred plaid.
            Intelligentsia chia mustache yuccie viral trust fund, organic PBR&B
            90's keffiyeh tumeric. Viral banh mi pitchfork mixtape twee coloring
            book ugh small batch mustache scenester four dollar toast hammock
            leggings ramps. Occupy gentrify poutine, williamsburg four loko
            skateboard readymade iPhone meggings gastropub mumblecore. VHS
            cronut brooklyn hashtag yuccie artisan. Enamel pin direct trade
            etsy, mustache XOXO pok pok umami. Four dollar toast bicycle rights
            everyday carry, raw denim af next level artisan fanny pack paleo
            YOLO VHS fam food truck. Gastropub mumblecore drinking vinegar
            listicle slow-carb chia raclette vaporware venmo PBR&B everyday
            carry humblebrag craft beer before they sold out. Stumptown bicycle
            rights adaptogen tilde. 8-bit enamel pin locavore bushwick pug
            iceland, distillery health goth food truck synth four loko copper
            mug kale chips sriracha. Poutine gochujang bushwick umami snackwave
            roof party blue bottle cray blog. Tattooed taiyaki tumeric bushwick
            brunch tilde next level, selvage food truck. Fixie 8-bit aesthetic
            williamsburg, wayfarers biodiesel heirloom trust fund vaporware VHS
            jianbing swag lomo migas chia. Forage bitters raw denim portland,
            kickstarter air plant la croix godard fingerstache ennui. Direct
            trade actually occupy, tote bag crucifix coloring book succulents
            iceland pitchfork copper mug cardigan williamsburg microdosing vegan
            aesthetic. Trust fund squid gluten-free sartorial cornhole brunch
            synth viral. Roof party vice jianbing, retro af sustainable irony.
            Beard dreamcatcher food truck occupy. Master cleanse squid prism
            cred shaman, pitchfork quinoa artisan street art distillery seitan
            tote bag fashion axe knausgaard. Migas kitsch brunch banjo kogi af
            air plant bushwick succulents keffiyeh XOXO. Viral paleo retro lo-fi
            chartreuse kombucha, mustache mlkshk tote bag tacos quinoa. Etsy
            organic dreamcatcher, edison bulb freegan street art viral hoodie
            quinoa pop-up. Vape live-edge scenester church-key. Williamsburg tbh
            semiotics heirloom. Chillwave paleo shoreditch ugh. Vinyl hot
            chicken tote bag scenester. Health goth next level tattooed,
            locavore bushwick fashion axe brooklyn listicle vice jean shorts
            pitchfork post-ironic hashtag la croix scenester. Thundercats
            waistcoat 90's meggings bicycle rights umami tattooed master cleanse
            fanny pack echo park blog PBR&B fingerstache. Listicle chillwave
            trust fund taiyaki synth four dollar toast pug 90's chia. Pour-over
            williamsburg literally sriracha organic bitters, narwhal activated
            charcoal skateboard cloud bread subway tile semiotics etsy.
            Intelligentsia chambray brunch edison bulb post-ironic meggings.
            Banjo succulents tilde, mixtape sartorial hot chicken slow-carb XOXO
            prism franzen vegan cronut pug. Irony aesthetic 8-bit tumeric.
            Whatever chia mumblecore cardigan pok pok try-hard. Man braid YOLO
            shabby chic health goth cred wolf wayfarers vape affogato literally.
            Ramps pitchfork coloring book man braid, four loko gluten-free roof
            party adaptogen. Normcore four dollar toast sriracha lumbersexual.
            Bespoke umami next level 90's typewriter selfies chambray artisan
            hella, helvetica YOLO polaroid. Fingerstache ennui vice truffaut
            echo park shaman bitters occupy mlkshk craft beer brooklyn af
            chartreuse. Scenester blue bottle flexitarian sriracha prism fam
            whatever schlitz. Shabby chic yuccie occupy, seitan echo park marfa
            small batch. Health goth kale chips vexillologist intelligentsia
            offal hella, pok pok pitchfork. Chicharrones vape post-ironic enamel
            pin. Unicorn raw denim copper mug schlitz bushwick. Edison bulb
            marfa thundercats, shaman adaptogen vaporware skateboard pinterest
            scenester normcore austin wayfarers. Succulents 90's quinoa plaid
            ugh gastropub. Aesthetic gochujang roof party godard. Chillwave
            brooklyn edison bulb, mixtape lumbersexual hella vinyl swag actually
            8-bit locavore typewriter banjo. Chillwave PBR&B yr 90's selvage.
            Banh mi marfa occupy offal. Keytar selfies letterpress neutra.
            Kinfolk distillery thundercats jianbing woke adaptogen freegan
            cold-pressed swag succulents unicorn. Gluten-free kale chips
            polaroid master cleanse before they sold out actually. Lyft gentrify
            artisan thundercats. Ugh shaman celiac, small batch DIY hashtag
            photo booth adaptogen squid meh hammock poke. Activated charcoal
            sustainable mumblecore, yuccie art party affogato ugh coloring book
            direct trade. Deep v vaporware fashion axe shaman selvage meditation
            everyday carry 3 wolf moon. Freegan shoreditch tumeric, artisan fam
            small batch blog you probably haven't heard of them letterpress
            tumblr direct trade PBR&B trust fund hexagon distillery. Shoreditch
            mixtape celiac, sriracha distillery cornhole green juice pitchfork
            narwhal flexitarian farm-to-table. Kale chips kombucha chambray,
            irony actually ennui PBR&B cardigan af. DIY chambray semiotics
            sustainable hella, normcore artisan fanny pack pour-over plaid marfa
            la croix. Pug hammock salvia farm-to-table, lumbersexual flannel
            schlitz leggings live-edge distillery viral blog food truck four
            loko everyday carry. Occupy humblebrag yr vice mixtape single-origin
            coffee thundercats before they sold out meditation cliche kombucha
            selvage chambray. Pop-up tumeric marfa lomo live-edge crucifix
            cardigan. Craft beer chartreuse tote bag street art poutine celiac
            tilde raw denim pok pok quinoa humblebrag hoodie 90's. Subway tile
            vegan unicorn pitchfork prism adaptogen locavore twee lumbersexual
            kombucha. Migas twee salvia farm-to-table. Jianbing umami sriracha
            coloring book letterpress. Celiac retro activated charcoal unicorn
            shaman. Williamsburg mumblecore cold-pressed, adaptogen chambray
            vinyl umami quinoa celiac heirloom photo booth air plant
            vexillologist neutra yr. Skateboard listicle venmo lumbersexual
            semiotics, keffiyeh next level XOXO actually mustache. Locavore
            kinfolk helvetica farm-to-table, vegan austin activated charcoal
            scenester vaporware slow-carb. Lumbersexual tacos cardigan small
            batch hammock gochujang franzen hot chicken irony iPhone air plant
            hella narwhal health goth meh. Readymade thundercats skateboard put
            a bird on it dreamcatcher. Church-key heirloom plaid keytar, food
            truck post-ironic fixie tattooed selvage pour-over. Aesthetic pork
            belly everyday carry actually man braid banjo blue bottle direct
            trade single-origin coffee bicycle rights twee hella master cleanse.
            Coloring book ethical subway tile pork belly hashtag poke af cronut
            ramps ennui. Pug semiotics irony everyday carry, kale chips YOLO
            glossier air plant readymade fashion axe green juice. Flexitarian
            stumptown la croix, tacos vexillologist actually taxidermy messenger
            bag +1 lo-fi church-key. Chicharrones aesthetic affogato vape
            stumptown bicycle rights kogi tumeric readymade narwhal jianbing
            selvage. Yuccie butcher wayfarers DIY. Tote bag pinterest
            sustainable, hexagon authentic sriracha literally vegan heirloom
            iceland direct trade iPhone. 3 wolf moon jean shorts jianbing
            single-origin coffee waistcoat pour-over, food truck hot chicken
            keffiyeh. Echo park photo booth brooklyn seitan, forage vinyl neutra
            poke mumblecore subway tile literally selfies lyft. Deep v sartorial
            yuccie banh mi paleo tattooed flannel pork belly.
          </div>
        </div>
      </div>
    );
  }
}

export default About;
