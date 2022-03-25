import cards from '@/common/cards';

 export const CardService  = {
		addToList: (card) => {
			cards.push(card)

			localStorage.setItem("cards", JSON.stringify(cards))
			return cards
		},

		editCard({ id, description, title }) {
			const index = cards.findIndex(({id: cardId}) => cardId === id )

			if(index >= 0) {
				cards[index] = {
					...cards[index],
					description,
					title
				}
			}

			localStorage.setItem('cards', JSON.stringify(cards))
			return cards
		},

  likeCard ({id, liked}) {
		const index = cards.findIndex(({id: cardId}) => cardId === id )
	
			
			if (index >= 0) {
				cards[index].liked = !liked
			}

			localStorage.setItem('cards', JSON.stringify(cards))
			return cards
    },

		deleteCard (id) {
			const index = cards.findIndex(({id: cardId}) => cardId === id )

			if (index >= 0) {
				cards.splice(index, 1)
			}

			localStorage.setItem('cards', JSON.stringify(cards))

			return cards
		}
 }

 


export default { CardService }