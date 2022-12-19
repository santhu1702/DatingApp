import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_Services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  members: Member[] | undefined;
  constructor(private memberService: MembersService) {}

  ngOnInit(): void {
    this.loadMembers()
  }

  loadMembers() {
    this.memberService.getMembers().subscribe((member) => {
      debugger
      console.log(member)
      this.members = member;
    });
  }
}c