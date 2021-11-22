import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import {deleteOfferFromFavoriteAction} from '../../store/api-actions';
import {useDispatch} from 'react-redux';
import {PropertyType} from '../../const';

type OfferCardProps = {
  offer: Offer
}

function FavoriteOfferCard({offer}:OfferCardProps): JSX.Element {
  const dispatch = useDispatch();
  const removeOfferFromFavorites = (id: number) => {
    dispatch(deleteOfferFromFavoriteAction(id));
  };
  const {id, isPremium, previewImage, price, isFavorite, title, type, rating} = offer;
  return (
    <article className="cities__place-card place-card">
      <div className={isPremium ? 'place-card__mark' : 'visually-hidden'}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button"
            onClick={(evt) => {
              evt.preventDefault();
              removeOfferFromFavorites(id);
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{PropertyType.get(type)}</p>
      </div>
    </article>
  );
}

export default FavoriteOfferCard;
