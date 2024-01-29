import { styled } from 'styled-components';
import { useFetchData } from '../../hooks/useFetchData';
import { getRegions } from '../../services/apiRegions';
import SpinnerMini from '../../ui/SpinnerMini';
import { getCurrencies } from '../../services/apiCurrencies';
import { Select, Option } from '../../ui/Selection';
import Table from '../../ui/Table';
import Input from '../../ui/Input';
import { HiOutlineTrash } from 'react-icons/hi2';
import { useFormContext } from 'react-hook-form';

function ProductGiftcartAddRegion({ setRenderTime, valueId, loop }) {
  const { register, unregister } = useFormContext();
  const { isLoading: isLoadingRegions, data: regionsData } = useFetchData(
    'regions',
    getRegions
  );

  const { isLoading: isLoadingCurrencies, data: currenciesData } = useFetchData(
    'currencies',
    getCurrencies
  );

  if (isLoadingCurrencies || isLoadingRegions) return <SpinnerMini />;

  function handleRemove() {
    unregister(`giftCardValues.value${valueId}`);
    setRenderTime((set) => set - 1);
  }

  return (
    <Wrapper>
      <Table.Row>
        <Select
          {...register(`giftCardValues.region${valueId}.region`, {
            valueAsNumber: true,
          })}
        >
          {regionsData.map((region) => (
            <Option key={region.id} value={region.id}>
              {region.regionEnglishName}
            </Option>
          ))}
        </Select>
        <Select
          {...register(`giftCardValues.region${valueId}.currency`, {
            valueAsNumber: true,
          })}
        >
          {currenciesData.map((currency) => (
            <Option key={currency.id} value={currency.id}>
              {currency.currencyEnglishName}
            </Option>
          ))}
        </Select>
        <Input
          placeholder='Enter values and seprate them with Comma ( , ) e.g: 1,5,10,20,50'
          {...register(`giftCardValues.region${valueId}.values`)}
        />

        <Input
          placeholder='Purchase link recommended'
          {...register(`giftCardValues.region${valueId}.purchaseLink`)}
        />

        <Input
          placeholder='Note for admins'
          {...register(`giftCardValues.region${valueId}.adminNote`)}
        />

        {loop.length === valueId && (
          <StyledSvg onClick={handleRemove}>
            <HiOutlineTrash />
          </StyledSvg>
        )}
      </Table.Row>
    </Wrapper>
  );
}

export default ProductGiftcartAddRegion;

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const StyledSvg = styled.div`
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
    cursor: pointer;
  }
`;
