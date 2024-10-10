import { Component, EventEmitter, Output, type OnInit } from '@angular/core'
import { ContactList, type ContactType } from '../../data'
import { CommonModule, JsonPipe } from '@angular/common'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular'

@Component({
  selector: 'chat-contact',
  standalone: true,
  imports: [CommonModule, NgbNavModule, SimplebarAngularModule, JsonPipe],
  templateUrl: './chat-contact.component.html',
  styles: ``,
})
export class ChatContactComponent implements OnInit {
  // userName = 'Daniel Madsen';
  // userName = 'James Andrews';
  userName = 'Shauna Jones';

  unreadMess = true;

  ContactList2: ContactType[] = [
    {
      name: 'Daniel Madsen',
      time: '5 min ago',
      message: 'Typing...',
      status: 'offline',
      // unread_messages: 3,
      image: 'assets/images/users/avatar-1.jpg',
      dataMessage: [
        {
          id: 1,
          direction: 'left',
          userImage: 'assets/images/users/avatar-1.jpg',
          messages: [
            'Bonjour !',
            "Il existe de nombreuses variations de passages du Lorem Ipsum.",
          ],
          time: 'hier',
        },
        {
          id: 2,
          direction: 'right',
          userImage: 'assets/images/users/avatar-3.jpg',
          messages: ['Salut,', 'Peut-on vérifier sur n’importe quelle plateforme en utilisant Docker ?'],
          time: '12:35pm',
        },
        {
          id: 3,
          direction: 'left',
          userImage: 'assets/images/users/avatar-1.jpg',
          messages: [
            'Bonne journée !',
            "La commande a été exécutée avec les privilèges root. J'en suis sûr.",
            'd’accord',
          ],
          time: '11:10pm',
        },
        {
          id: 4,
          direction: 'right',
          userImage: 'assets/images/users/avatar-3.jpg',
          messages: [
            "Merci pour ton message David. Je pensais être seul avec ce problème. S'il te plaît, 👍 l'issue pour la soutenir :)",
          ],
          time: '10:10pm',
        },
        {
          id: 5,
          direction: 'left',
          userImage: 'assets/images/users/avatar-1.jpg',
          messages: [
            'Désolé, je viens juste de revenir !',
            "On dirait que tu viens du monde Mac OS. Il n'y a pas de dossier /Users/ sur Linux 😄",
          ],
          time: '11:15am',
        },
        {
          id: 6,
          direction: 'right',
          userImage: 'assets/images/users/avatar-3.jpg',
          messages: [
            'Bonjour !',
            "Il existe de nombreuses variations de passages du Lorem Ipsum.",
          ],
          time: '9:02am',
        },
      ],
    },
    {
      name: 'James Andrews',
      time: 'Yesterday',
      message: 'Génial ! Je t\'enverrai les détails par mail. On se tient au courant !',
      status: 'offline',
      unread_messages: 1,
      image: 'assets/images/users/avatar-2.jpg',
      dataMessage: [
        {
          id: 1,
          direction: 'left',
          userImage: 'assets/images/users/avatar-2.jpg', // Image de James
          messages: [
            'Salut Shauna, comment ça va ?',
            "J'ai vu ton dernier travail, c'était incroyable !",
          ],
          time: 'hier',
        },
        {
          id: 2,
          direction: 'right',
          userImage: 'assets/images/users/avatar-3.jpg', // Image de l'autre utilisateur
          messages: [
            'Salut James ! Ça va super, merci !',
            "Oui, j'ai travaillé dur sur ce projet. Content que tu l'aimes !",
          ],
          time: '12:30pm',
        },
        {
          id: 3,
          direction: 'left',
          userImage: 'assets/images/users/avatar-2.jpg', // Image de James
          messages: [
            'Tu mérites toutes les félicitations. Continue comme ça !',
            "D'ailleurs, je voulais te demander si tu serais dispo pour un autre projet.",
          ],
          time: '12:35pm',
        },
        {
          id: 4,
          direction: 'right',
          userImage: 'assets/images/users/avatar-3.jpg', // Image de l'autre utilisateur
          messages: [
            "Merci beaucoup, c'est gentil ! Je suis toujours prêt pour de nouveaux défis. Parle-moi de ton projet.",
          ],
          time: '12:40pm',
        },
        {
          id: 5,
          direction: 'left',
          userImage: 'assets/images/users/avatar-2.jpg', // Image de James
          messages: [
            "Génial ! Je t'enverrai les détails par mail. On se tient au courant !",
          ],
          time: '12:45pm',
        },
      ],
    },
    {
      name: 'Groupe de Dév',
      time: '5 min ago',
      message: 'Salut tout le monde !',
      status: 'online',
      unread_messages: 2,
      image: 'https://static.vecteezy.com/system/resources/previews/043/933/770/non_2x/developer-line-inverted-icon-design-vector.jpg', // Image du groupe
      isGroup: true,  // Indique qu'il s'agit d'un groupe
      participants: ['Daniel', 'James', 'Karen', 'Frank'], // Membres du groupe
      dataMessage: [
        {
          id: 1,
          direction: 'left',
          userImage: 'assets/images/users/avatar-1.jpg',
          messages: [
            "Salut tout le monde !",
          ],
          time: '10:00am',
          senderName: 'Daniel Madsen'
        },
        {
          id: 2,
          direction: 'left',
          userImage: 'assets/images/users/avatar-2.jpg',
          messages: ['Hello! Comment ça va ?'],
          time: '10:05am',
          senderName: 'James Andrews'
        },
        {
          id: 3,
          direction: 'right',
          userImage: 'assets/images/users/avatar-3.jpg',
          messages: ['Salut ! Je vais bien, merci.'],
          time: '10:15am',
          senderName: 'Shauna Jones'
        },
      ],
    },
    {
      name: 'Shauna Jones',
      time: 'Yesterday',
      message: 'Congratulations!',
      status: 'offline',
      image: 'assets/images/users/avatar-3.jpg',
      dataMessage: [
        {
          id: 1,
          direction: 'right',
          userImage: 'assets/images/users/avatar-1.jpg',
          messages: [
            'Bonjour !',
            "Il existe de nombreuses variations de passages du Lorem Ipsum.",
          ],
          time: 'hier',
        },
        {
          id: 2,
          direction: 'left',
          userImage: 'assets/images/users/avatar-3.jpg',
          messages: ['Salut,', 'Peut-on vérifier sur n’importe quelle plateforme en utilisant Docker ?'],
          time: '12:35pm',
        },
        {
          id: 3,
          direction: 'right',
          userImage: 'assets/images/users/avatar-1.jpg',
          messages: [
            'Bonne journée !',
            "La commande a été exécutée avec les privilèges root. J'en suis sûr.",
            'd’accord',
          ],
          time: '11:10pm',
        },
        {
          id: 4,
          direction: 'left',
          userImage: 'assets/images/users/avatar-3.jpg',
          messages: [
            "Merci pour ton message David. Je pensais être seul avec ce problème. S'il te plaît, 👍 l'issue pour la soutenir :)",
          ],
          time: '10:10pm',
        },
        {
          id: 5,
          direction: 'right',
          userImage: 'assets/images/users/avatar-1.jpg',
          messages: [
            'Désolé, je viens juste de revenir !',
            "On dirait que tu viens du monde Mac OS. Il n'y a pas de dossier /Users/ sur Linux 😄",
          ],
          time: '11:15am',
        },
        {
          id: 6,
          direction: 'left',
          userImage: 'assets/images/users/avatar-3.jpg',
          messages: [
            'Bonjour !',
            "Il existe de nombreuses variations de passages du Lorem Ipsum.",
          ],
          time: '9:02am',
        },
      ],
    },
    {
      name: 'Frank Wei',
      time: '1 Feb',
      message: 'Voice message!',
      status: 'offline',
      image: 'assets/images/users/avatar-4.jpg',
    },
  ]

  contactList = this.ContactList2.filter(x => x.name != this.userName);
  // contactList = ContactList.filter(x => x.name != this.userName);

  @Output() profileDetail = new EventEmitter<ContactType>()

  ngOnInit(): void {
    // Fetch Data
    const data = this.contactList[0]
    this.profileDetail.emit(data)
  }

  getDetail(user: ContactType) {
  this.unreadMess = false;
  const data = user
    this.profileDetail.emit(data)
  }
}
