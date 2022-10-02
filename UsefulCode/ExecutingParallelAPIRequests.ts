// @ts-nocheck
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { forkJoin as observableForkJoin, Observable } from 'rxjs';

@Injectable()
export class DataService {
  /**
   * Initializes an instance of DataService class.
   */
  constructor(private readonly _messageService: MessageService) { }
  
  /**
   * Gets the messages for given message ids.
   * @param messageIds Message IDs.
   */
  public getMessages(messageIds: number[]): Observable<Message[]> {
    return new Observable((observer) => {
      // Create message request observables
      const messageRequests: Observable<Message>[] = [];
      for (const id of messageIds) {
        messageRequests.push(this._messageService.getById(id));
      }
      // Create a parallel request to get messages
      const parallelRequests$ = observableForkJoin(messageRequests);
      parallelRequests$.subscribe((result) => {
        observer.next(result);
        observer.complete();
      }, (error: HttpErrorResponse) => observer.error(error));
    });
  }
}
