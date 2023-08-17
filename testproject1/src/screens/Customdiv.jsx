import React from "react";

import { Card } from "primereact/card";

const Customdiv = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex h-1/3 w-1/3">
        <Card title="Title" subTitle="Subtitle" className="md:w-25rem">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Customdiv;
