import React, { Fragment } from 'react'
import BrandsItems from './BrandsItems';

export default function Brands() {

    const brands = [{
        brandName: "Microsoft",
        href: "",
    },{
        brandName: "Google",
        href: "",
    },{
        brandName: "Oracle",
        href: "",
    },{
        brandName: "Upam",
        href: "",
    }];
  return (
    <Fragment>
        <div>
            {
                brands.map((item, index)=>{
                    return(
                        <BrandsItems 
                            key={`key-${index}`}
                            item={item}
                        />
                    )
                })
            }
        </div>
    </Fragment>
  )
}
