import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Writter } from './writter';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const writters = [
      { id: 11, name: 'Jose Saramago', photo: 'https://lamenteesmaravillosa.com/wp-content/uploads/2016/03/jose-saramago.jpg',books: ["Ensayo Sobre la Ceguera", "Levantado del Suelo", "Todos los Nombres"], bio: "José de Sousa Saramago (Azinhaga, 16 de noviembre de 1922-Tías, 18 de junio de 2010) fue un escritor, novelista, poeta, periodista y dramaturgo portugués. En 1998 se le otorgó el Premio Nobel de Literatura. La Academia Sueca destacó su capacidad para «volver comprensible una realidad huidiza, con parábolas sostenidas por la imaginación, la compasión y la ironía»." },
      { id: 12, name: 'James Joyce', photo: 'https://images.clarin.com/2013/07/22/HyM-34j2Ql_340x340.jpg',books: ["Dublineses", "Ulises"], bio: "James Augustine Aloysius Joyce fue un escritor irlandés, mundialmente reconocido como uno de los más importantes e influyentes del siglo XX. Joyce es aclamado por su obra maestra, Ulises (1922), y por su controvertida novela posterior, Finnegans Wake" },
      { id: 13, name: 'Herman Hesse', photo: 'https://miro.medium.com/max/900/1*NBO5yOsUXCrtVX34e_KaEg.jpeg', books: ["Siddhartha", "Lobo Estepario"], bio: "Hermann Karl Hesse fue un escritor, poeta, novelista y pintor alemán, naturalizado suizo en 1924." },
      { id: 14, name: 'Julio Cortazar', photo: 'https://www.biografiasyvidas.com/biografia/c/fotos/cortazar_julio_5.jpg', books: ["Rayuela", "Final del Juego"], bio: "Julio Florencio Cortázar fue un escritor, traductor e intelectual argentino. Sin renunciar a su nacionalidad argentina, optó por la nacionalidad francesa en 1981, en protesta contra el régimen militar argentino"},
      { id: 15, name: 'Miguel de Unamuno', photo: 'https://estaticos.muyhistoria.es/uploads/images/article/5bae0e8e5bafe84999cab662/p-miguel-de-unamuno.jpg', books: ["Niebla", "San Manuel Bueno, mártir"], bio: "Miguel de Unamuno y Jugo fue un escritor y filósofo español perteneciente a la generación del 98. En su obra cultivó gran variedad de géneros literarios como novela, ensayo, teatro y poesía. Rector de la Universidad de Salamanca a lo largo de tres periodos, también fue diputado de las Cortes constituyentes de la Segunda República, de la que se fue distanciando hasta el punto de secundar la sublevación militar que dio inicio a la guerra civil, si bien terminó retractándose de este apoyo" },
      { id: 16, name: 'Jorge Luis Borges', photo: 'https://ep01.epimg.net/elpais/imagenes/2018/05/16/opinion/1526492334_254772_1526493156_noticia_normal.jpg', books: ["Fervor de Buenos Aires", "El hacedor", "Ficciones"], bio: "Jorge Francisco Isidoro Luis Borges Acevedo fue un escritor de cuentos, ensayista, poeta y traductor argentino y una figura clave tanto para la literatura en habla hispana como para la literatura universal"},
      { id: 17, name: 'Fiodor Dostoyevski', photo: 'https://vignette.wikia.nocookie.net/literatura/images/3/3c/Fi%C3%B3dor_Dostoievski.jpg/revision/latest/scale-to-width-down/340?cb=20170724202543&path-prefix=es' ,books: ["Crimen y Castigo", "El jugador"], bio: "Fiódor Mijáilovich Dostoyevski fue uno de los principales escritores de la Rusia zarista, cuya literatura explora la psicología humana en el complejo contexto político, social y espiritual de la sociedad rusa del siglo xix. Es considerado uno de los más grandes escritores de Occidente y de la literatura universal" },
      { id: 18, name: 'Garcia Marquez', photo: 'https://ep01.epimg.net/cultura/imagenes/2017/03/05/actualidad/1488737465_851249_1488738494_noticia_normal.jpg', books: ["Cien Años de Soledad", "Amor en los Tiempos del Cólera"], bio: "Gabriel José de la Concordia García Márquez ​​ fue un escritor, guionista, editor y periodista colombiano. En 1982 recibió el Premio Nobel de Literatura.​ Fue conocido por su apodo Gabo y familiarmente y por sus amigos como Gabito" },
      { id: 19, name: 'Mario Vargas Llosa', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQHJ_1aXrCZevxZHDdP575dEUoGqoA3Lp6DWG55ghsjTgGShg6&usqp=CAU',  books: ["La fiesta del Chivo", "Conversación en la Catedral"], bio: "Jorge Mario Pedro Vargas Llosa, marqués de Vargas Llosa, ​​ conocido como Mario Vargas Llosa, es un escritor y político peruano que cuenta también con la nacionalidad española desde 1993."},
      { id: 20, name: 'Pablo Neruda', photo:'https://www.biografiasyvidas.com/monografia/neruda/fotos/neruda340.jpg',  books: ["Veinte Poemas de Amor y una canción deseperada", "España en el Corazón"], bio: "Pablo Neruda, seudónimo y posterior nombre legal​ de Ricardo Eliécer Neftalí Reyes Basoalto, fue un poeta y político chileno"}
    ];
    return {writters};
  }

  genId(writters: Writter[]): number {
    return writters.length > 0 ? Math.max(...writters.map(writter => writter.id)) + 1 : 11;
  }
}
