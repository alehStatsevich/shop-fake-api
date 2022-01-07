import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../bll/store";
import s from "./Paginator.module.css";
import {fetchBeersThunk} from "../../bll/punkReduser";

type PropsType = {
  page: number;
  per_page: number;
};

export const Paginator = ({ page, per_page }: PropsType) => {
  const dispatch = useDispatch();
  const cardPackTotalCount = useSelector<AppStoreType, number>((state) => state.beers.pageTotalCount);
console.log(cardPackTotalCount,'cardPackTotalCount')
  const onPageChanged = (page: number) => {
    dispatch(fetchBeersThunk(page));
  };

  const packPagesCount = Math.ceil(cardPackTotalCount / per_page);
  let pages = [];
  for (let i = 1; i <= packPagesCount; i++) {
    pages.push(i);
  }

  const portionSize = 3;

  const portionCount = Math.ceil(packPagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState<number>(1);
  const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize;

  return (
    <div className={s.paginator_container}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          &lArr;
        </button>
      )}
      {pages
        .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((p, i) => {
          return (
            <span
              key={i}
              className={page === p ? s.selectedPage : s.paginator}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          &rArr;
        </button>
      )}
    </div>
  );
};
