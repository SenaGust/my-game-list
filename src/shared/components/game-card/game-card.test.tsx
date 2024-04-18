import { userEvent } from '@/shared/utils/tests/user-event';
import { GameCard } from './game-card';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { GameCardProps } from './game-card.types';

describe('GameCard', () => {
  const mockedGameCardProps: GameCardProps = {
    name: 'game name',
    imageUrl: '/logo.png',
  };

  it('should render correctly', () => {
    render(<GameCard {...mockedGameCardProps} />);

    expect(screen.getByRole('img', { name: mockedGameCardProps.name })).toBeInTheDocument();
  });

  it('should show the name of the game only when is hovering the image', async () => {
    render(<GameCard {...mockedGameCardProps} />);

    await userEvent.hover(screen.getByRole('img', { name: mockedGameCardProps.name }));

    expect(screen.getByText(mockedGameCardProps.name)).toBeInTheDocument();

    await userEvent.unhover(screen.getByRole('img', { name: mockedGameCardProps.name }));

    await waitForElementToBeRemoved(() => screen.queryByText(mockedGameCardProps.name));
  });
});
