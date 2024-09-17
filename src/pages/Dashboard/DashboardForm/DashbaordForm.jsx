
import { useState } from 'react'
import { Col } from 'react-bootstrap'

const DashbaordForm = ({sendData,editData}) => {
    const [img, setImg] = useState(editData?editData.img:"");
    const [title, setTitle] = useState(editData?editData.title:"");
    const [price, setPrice] = useState(editData?editData.price:"");
    const [category, setCategory] = useState(editData?editData.category:"");
    

    
    const formSubmited = e => {
        e.preventDefault();
        sendData({
            img,title,price,category
        })
    }

    return (
        <Col md={5}>
            <form onSubmit={formSubmited} >

                <div className="mb-3">
                    <label className="form-label">Image url</label>
                    <input  value={img} type="text" className="form-control" onChange={e => setImg(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input  value={title} type="text" className="form-control" onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input value={price} type="number" className="form-control" onChange={e => setPrice(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input  value={category} type="text" className="form-control" onChange={e => setCategory(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">{editData?"Update":"Add"}</button>
            </form>
        </Col>
    )
}

export default DashbaordForm