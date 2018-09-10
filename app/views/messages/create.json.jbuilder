json.array! @message do |message|
  json.id         message.id
  json.image      message.image
  json.text       message.text
  json.user_id    message.user.id
  json.group_id   message.group.id
  json.user_name  message.user.name
  json.created_at message.created_at
end
