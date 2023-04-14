import { products } from "../../utils"
import CardProducts from "../CardProducts"
import { ShowCaseStyled } from "./styled"

const ShowCase = ({ title }: any) => {
  return (
    <ShowCaseStyled>
      <h2>{title}</h2>
      <nav>
        <ul>
          {
            products.map((product) => {
              return <CardProducts product={product} />
            })
          }
        </ul>
      </nav>
    </ShowCaseStyled>
  )
}

export default ShowCase