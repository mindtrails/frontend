import React from "react";
import { mdiPi, mdiBookOpenBlankVariant } from "@mdi/js";

import Navbar from "../../common/components/navbar/Navbar";

const Notfound = () => {
    return (
        <div className="homepageContainer">
            <Navbar></Navbar>
            <div className="coursesPageTitle">404: Page Not Found</div>
        </div>
    );
};

export default Notfound;
