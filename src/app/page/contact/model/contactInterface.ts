
export interface ContactI {
  id                  :any | number
  ,name               :string
  ,lastname           :string
  ,gender             :string
  ,address            :string
  ,email              :string
  ,status             :string
  ,ContactCellPhones  :ContactCellPhonesI[]
}

export interface ContactCellPhonesI {
   cellphoneId          :any | number
  ,cellphone            :string
}
