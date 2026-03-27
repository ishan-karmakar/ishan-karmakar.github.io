import React, { CSSProperties, ReactNode } from 'react'; // Import types for props
import clsx from 'clsx'; // clsx helps manage conditional className names in a clean and concise manner.

interface Props {
    style?: CSSProperties; // Custom styles for the container card
    children: ReactNode; // Content to be included within the card
}

export function Card(props: Props) {
    return <div className="card item shadow--tl" style={props.style}>{props.children}</div>
}

export function CardHeader(props: Props) {
    return <div className="card__header" style={props.style}>{props.children}</div>
}

export function CardBody(props: Props) {
    return <div className="card__body" style={props.style}>{props.children}</div>
}

export function CardFooter(props: Props) {
    return <div className="card__footer" style={props.style}>{props.children}</div>
}

export function CardImage(props: {style?: CSSProperties, src: string, alt?: string}) {
    return <img className="card__image" style={props.style} src={props.src} alt={props.alt} />
}